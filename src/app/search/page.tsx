'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompanyData {
  company_name: string;
  company_number: string;
  type: string;
  date_of_creation: string;
  company_status: string;
  registered_office_address: {
    address_line_1: string;
    locality: string;
    postal_code: string;
  };
  officers: Officer[];
  filing_history: FilingHistoryItem[];
}

interface Officer {
  name: string;
  officer_role: string;
  appointed_on: string;
}

interface FilingHistoryItem {
  date: string;
  type: string;
  description: string;
}

type SearchType = 'companies' | 'officers' | 'disqualified-officers';

const CompanySearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('profile');
  const [searchType, setSearchType] = useState<SearchType>('companies');

  const handleSearch = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/company-search?q=${encodeURIComponent(query)}&type=${searchType}`);
      if (!response.ok) {
        throw new Error('Failed to fetch company data');
      }
      const data: CompanyData = await response.json();
      setCompanyData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const renderCompanyProfile = (): JSX.Element => (
    <Card>
      <CardHeader>
        <CardTitle>{companyData?.company_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Company Number:</strong> {companyData?.company_number}</p>
        <p><strong>Company Type:</strong> {companyData?.type}</p>
        <p><strong>Incorporation Date:</strong> {companyData?.date_of_creation}</p>
        <p><strong>Status:</strong> {companyData?.company_status}</p>
        <p><strong>Registered Address:</strong> {companyData?.registered_office_address.address_line_1}, {companyData?.registered_office_address.locality}, {companyData?.registered_office_address.postal_code}</p>
      </CardContent>
    </Card>
  );

  const renderOfficers = (): JSX.Element => (
    <Card>
      <CardHeader>
        <CardTitle>Officers</CardTitle>
      </CardHeader>
      <CardContent>
        {companyData?.officers.map((officer, index) => (
          <div key={index} className="mb-4">
            <p><strong>Name:</strong> {officer.name}</p>
            <p><strong>Role:</strong> {officer.officer_role}</p>
            <p><strong>Appointed On:</strong> {officer.appointed_on}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  const renderFilingHistory = (): JSX.Element => (
    <Card>
      <CardHeader>
        <CardTitle>Filing History</CardTitle>
      </CardHeader>
      <CardContent>
        {companyData?.filing_history.map((filing, index) => (
          <div key={index} className="mb-4">
            <p><strong>Date:</strong> {filing.date}</p>
            <p><strong>Type:</strong> {filing.type}</p>
            <p><strong>Description:</strong> {filing.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enhanced Company Information Search</h1>
      <div className="flex gap-2 mb-4">
        <Select value={searchType} onValueChange={(value: SearchType) => setSearchType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Search type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="companies">Companies</SelectItem>
            <SelectItem value="officers">Officers</SelectItem>
            <SelectItem value="disqualified-officers">Disqualified Officers</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : <Search className="mr-2" />}
          Search
        </Button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {companyData && (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="profile">Company Profile</TabsTrigger>
            <TabsTrigger value="officers">Officers</TabsTrigger>
            <TabsTrigger value="filing">Filing History</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">{renderCompanyProfile()}</TabsContent>
          <TabsContent value="officers">{renderOfficers()}</TabsContent>
          <TabsContent value="filing">{renderFilingHistory()}</TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default CompanySearch;