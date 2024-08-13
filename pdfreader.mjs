import { PdfReader } from "pdfreader";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.COMPANIES_HOUSE_API_KEY;
const BASE_URL = "https://api.company-information.service.gov.uk";

async function getFilingHistory(companyNumber) {
  const url = `${BASE_URL}/company/${companyNumber}/filing-history`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(API_KEY + ":").toString("base64")}`,
    },
  });
  return response.json();
}

async function getFilingHistoryItem(companyNumber, transactionId) {
  const url = `${BASE_URL}/company/${companyNumber}/filing-history/${transactionId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(API_KEY + ":").toString("base64")}`,
    },
  });
  return response.json();
}

async function fetchPDF(documentMetadataUrl) {
  const response = await fetch(documentMetadataUrl, {
    headers: {
      Authorization: `Basic ${Buffer.from(API_KEY + ":").toString("base64")}`,
    },
  });
  const metadata = await response.json();
  const pdfUrl = metadata.links.document;
  
  const pdfResponse = await fetch(pdfUrl, {
    headers: {
      Authorization: `Basic ${Buffer.from(API_KEY + ":").toString("base64")}`,
    },
  });
  return pdfResponse.buffer();
}

function parsePDF(buffer) {
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

async function processPDFs(companyNumber) {
  try {
    const filingHistory = await getFilingHistory(companyNumber);
    
    for (const item of filingHistory.items) {
      if (item.links && item.links.document_metadata) {
        console.log(`Processing: ${item.description}`);
        const itemDetails = await getFilingHistoryItem(companyNumber, item.transaction_id);
        const pdfBuffer = await fetchPDF(itemDetails.links.document_metadata);
        const content = await parsePDF(pdfBuffer);
        console.log("PDF Content:");
        console.log(content);
        console.log("------------------------");
      }
    }
  } catch (error) {
    console.error("Error processing PDFs:", error);
  }
}

// Usage
const companyNumber = "00445790"; // Example company number
processPDFs(companyNumber);