# Companies House Lookup

Companies House Lookup is a Next.js application that provides an enhanced interface for searching and displaying UK company information using the Companies House API.

## Features

- Search for companies, officers, and disqualified officers
- View detailed company profiles
- Display officer information
- Show filing history
- Financial data extraction from PDF documents (coming soon)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/companieshouse-lookup.git
   cd companieshouse-lookup
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Companies House API key:
   ```
   COMPANIES_HOUSE_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Contains the main application pages and API routes
- `src/components/`: Reusable React components
- `src/lib/`: Utility functions and shared code

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI components

## API Routes

The project includes API routes to interact with the Companies House API:

- `/api/company-search`: Search for companies, officers, or disqualified officers
- `/api/company-details`: Fetch detailed information about a specific company
- `/api/process-pdf`: Extract financial data from PDF documents (coming soon)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Companies House API](https://developer.companieshouse.gov.uk/api/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com/)