import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h2>

        <div className="space-y-8">
          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Introduction
              </h3>
              <p className="text-gray-600">
                This Privacy Policy explains how CH Lookup collects, uses, and
                discloses your personal information when you use our website. By
                using our service, you consent to the practices described in
                this policy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Information We Collect
              </h3>
              <p className="text-gray-600">
                We collect various types of information to provide and improve
                our service, including:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  Personal Information: Such as your name, email address, and
                  contact details.
                </li>
                <li>
                  Usage Data: Information about how you use our website,
                  including your IP address, browser type, and pages visited.
                </li>
                <li>
                  Cookies: We use cookies to enhance your experience on our
                  site. You can control the use of cookies through your browser
                  settings.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                3. How We Use Your Information
              </h3>
              <p className="text-gray-600">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>To provide and maintain our service.</li>
                <li>
                  To improve and personalize your experience on our website.
                </li>
                <li>
                  To communicate with you, including sending updates and
                  promotional materials.
                </li>
                <li>To analyze usage patterns and improve our services.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Information Sharing and Disclosure
              </h3>
              <p className="text-gray-600">
                We do not sell or rent your personal information to third
                parties. We may share your information with third-party service
                providers who assist us in operating our website and providing
                our services, subject to confidentiality agreements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Data Security
              </h3>
              <p className="text-gray-600">
                We implement a variety of security measures to protect your
                personal information. However, no method of transmission over
                the internet is completely secure, and we cannot guarantee the
                absolute security of your data.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Your Data Protection Rights
              </h3>
              <p className="text-gray-600">
                Depending on your location, you may have the right to access,
                correct, or delete the personal information we have about you.
                You may also have the right to object to or restrict certain
                types of data processing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Changes to This Privacy Policy
              </h3>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes by posting the new policy
                on our website. Your continued use of the service after any
                changes become effective constitutes your acceptance of the
                revised policy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Contact Us
              </h3>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at
                support@chlookup.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 CHLookup. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
            {" | "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
