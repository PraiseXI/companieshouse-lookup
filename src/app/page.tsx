import React from "react";
import { Search, FileText, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-600">CH Lookup</h1>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Simplify Your Company Research
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Access comprehensive UK company information with ease. Fast,
            accurate, and user-friendly.
          </p>
          <Link href="/search" passHref>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Searching
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Search className="h-8 w-8 text-blue-500" />,
              title: "Quick Search",
              description: "Find company details in seconds",
            },
            {
              icon: <FileText className="h-8 w-8 text-green-500" />,
              title: "Comprehensive Data",
              description: "Access full company records and filings",
            },
            {
              icon: <Clock className="h-8 w-8 text-purple-500" />,
              title: "Real-time Updates",
              description: "Get the latest information instantly",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
              title: "Advanced Analytics",
              description: "Gain insights with our analysis tools",
            },
          ].map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to streamline your company research?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of professionals who trust Companies House Lookup for
            accurate and up-to-date information.
          </p>
          <Link href="/search" passHref>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Now
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 CHLookup. All rights reserved.</p>
          <p className="mt-2">
            <a href="/tos" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
            {" | "}
            <a href="/privacypolicy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;