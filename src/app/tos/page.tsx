import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const TermsOfService = () => {
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
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Terms of Service
        </h2>

        <div className="space-y-8">
          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-600">
                By accessing and using the CH Lookup website, you agree to
                comply with and be bound by the following terms and conditions.
                If you do not agree to these terms, you should not use our
                service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Changes to Terms
              </h3>
              <p className="text-gray-600">
                CH Lookup reserves the right to modify these Terms of Service at
                any time. Any changes will be effective immediately upon posting
                on our website. Your continued use of the service following any
                such changes constitutes your acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                3. User Responsibilities
              </h3>
              <p className="text-gray-600">
                You are responsible for your use of the CH Lookup service,
                including any content you access, upload, or share. You agree
                not to use the service for any illegal activities or in a way
                that could harm others.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Privacy Policy
              </h3>
              <p className="text-gray-600">
                Your use of the service is also governed by our Privacy Policy,
                which is incorporated into these terms by reference. Please
                review our Privacy Policy to understand our practices.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Termination of Service
              </h3>
              <p className="text-gray-600">
                We reserve the right to suspend or terminate your access to the
                CH Lookup service at any time, without notice, for conduct that
                we believe violates these Terms of Service or is harmful to
                other users of the service, us, or third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Limitation of Liability
              </h3>
              <p className="text-gray-600">
                CH Lookup shall not be liable for any indirect, incidental,
                special, or consequential damages arising out of or in
                connection with your use of the service. Our liability to you
                shall not exceed the amount you have paid, if any, for accessing
                the service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Governing Law
              </h3>
              <p className="text-gray-600">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the jurisdiction in which CH Lookup
                operates, without regard to its conflict of law principles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Contact Information
              </h3>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please
                contact us at support@chlookup.com.
              </p>
            </CardContent>
          </Card>
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
            <a href="/tos" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
