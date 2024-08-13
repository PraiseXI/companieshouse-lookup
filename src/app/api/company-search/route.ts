// import { NextRequest, NextResponse } from 'next/server';
// import axios, { AxiosResponse } from 'axios';

// const COMPANIES_HOUSE_API_KEY = process.env.COMPANIES_HOUSE_API_KEY;

// interface CompanySearchResult {
//   items: Array<{
//     company_number: string;
//     title: string;
//   }>;
// }

// interface CompanyDetails {
//   company_name: string;
//   company_number: string;
//   type: string;
//   date_of_creation: string;
//   company_status: string;
//   registered_office_address: {
//     address_line_1: string;
//     locality: string;
//     postal_code: string;
//   };
// }

// interface OfficerList {
//   items: Array<{
//     name: string;
//     officer_role: string;
//     appointed_on: string;
//   }>;
// }

// interface FilingHistoryList {
//   items: Array<{
//     date: string;
//     type: string;
//     description: string;
//   }>;
// }

// type SearchType = 'companies' | 'officers' | 'disqualified-officers';

// export async function GET(request: NextRequest): Promise<NextResponse> {
//   const searchParams = request.nextUrl.searchParams;
//   const q = searchParams.get('q');
//   const type = searchParams.get('type') as SearchType | null;

//   if (!q || !type) {
//     return NextResponse.json({ error: 'Missing query or type parameter' }, { status: 400 });
//   }

//   try {
//     let searchUrl: string;
//     switch(type) {
//       case 'companies':
//         searchUrl = `https://api.companieshouse.gov.uk/search/companies`;
//         break;
//       case 'officers':
//         searchUrl = `https://api.companieshouse.gov.uk/search/officers`;
//         break;
//       case 'disqualified-officers':
//         searchUrl = `https://api.companieshouse.gov.uk/search/disqualified-officers`;
//         break;
//       default:
//         return NextResponse.json({ error: 'Invalid search type' }, { status: 400 });
//     }

//     const response: AxiosResponse<CompanySearchResult> = await axios.get(searchUrl, {
//       params: { q },
//       auth: { username: COMPANIES_HOUSE_API_KEY || '', password: '' },
//     });

//     if (response.data.items && response.data.items.length > 0) {
//       const companyNumber = response.data.items[0].company_number;
      
//       const [companyDetails, officers, filingHistory]: [
//         AxiosResponse<CompanyDetails>,
//         AxiosResponse<OfficerList>,
//         AxiosResponse<FilingHistoryList>
//       ] = await Promise.all([
//         axios.get(`https://api.companieshouse.gov.uk/company/${companyNumber}`, {
//           auth: { username: COMPANIES_HOUSE_API_KEY || '', password: '' },
//         }),
//         axios.get(`https://api.companieshouse.gov.uk/company/${companyNumber}/officers`, {
//           auth: { username: COMPANIES_HOUSE_API_KEY || '', password: '' },
//         }),
//         axios.get(`https://api.companieshouse.gov.uk/company/${companyNumber}/filing-history`, {
//           auth: { username: COMPANIES_HOUSE_API_KEY || '', password: '' },
//         })
//       ]);

//       return NextResponse.json({
//         ...companyDetails.data,
//         officers: officers.data.items,
//         filing_history: filingHistory.data.items
//       });
//     } else {
//       return NextResponse.json({ error: 'Company not found' }, { status: 404 });
//     }
//   } catch (error) {
//     console.error('Error fetching company data:', error);
//     return NextResponse.json({ error: 'Failed to fetch company data' }, { status: 500 });
//   }
// }