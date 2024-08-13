import { NextRequest, NextResponse } from 'next/server';
import { PdfReader } from "pdfreader";
import fetch from "node-fetch";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
  }

  try {
    const pdfBuffer = await fetchPDF(url);
    const content = await parsePDF(pdfBuffer);
    const financialData = extractFinancialData(content);
    return NextResponse.json(financialData);
  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json({ error: 'Failed to process PDF' }, { status: 500 });
  }
}

async function fetchPDF(url: string): Promise<Buffer> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.COMPANIES_HOUSE_API_KEY + ":").toString("base64")}`,
    },
  });
  return response.buffer();
}

function parsePDF(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new PdfReader();
    let content = "";

    reader.parseBuffer(buffer, (err, item) => {
      if (err) reject(err);
      else if (!item) resolve(content);
      else if (item.text) content += item.text + " ";
    });
  });
}

function extractFinancialData(content: string): FinancialData {
  const financialData: FinancialData = {
    rawText: content,
  };

  // Try to extract year
  const yearMatch = content.match(/(?:year|period).*?(\d{4})/i);
  if (yearMatch) {
    financialData.year = parseInt(yearMatch[1]);
  }

  // Try to extract financial figures
  const figures = [
    { key: 'revenue', regex: /(?:revenue|turnover).*?([\d,]+)/i },
    { key: 'profit', regex: /(?:profit|loss).*?([\d,]+)/i },
    { key: 'assets', regex: /(?:total assets|net assets).*?([\d,]+)/i },
    { key: 'liabilities', regex: /(?:liabilities|total liabilities).*?([\d,]+)/i },
  ];

  figures.forEach(({ key, regex }) => {
    const match = content.match(regex);
    if (match) {
      financialData[key as keyof FinancialData] = parseInt(match[1].replace(/,/g, ''));
    }
  });

  return financialData;
}

interface FinancialData {
    year?: number;
    revenue?: number;
    profit?: number;
    assets?: number;
    liabilities?: number;
    rawText: string;
    [key: string]: number | string | undefined;
  }