import PageLayout from "@/components/layout/pageLayout";
import React from "react";

export default function TermsOfServicePage() {
  return (
    <PageLayout
      title="Terms of Service"
      description="Understand the terms that govern your use of Paathshala’s learning platform."
    >
      <div className="text-gray-700 space-y-6 leading-relaxed">
        <p>
          Welcome to <strong>Paathshala</strong>. By accessing or using our platform, you agree to be bound by the
          terms and conditions outlined below. These terms are designed to ensure a secure, respectful, and
          productive environment for all users :-learners, educators, and partners alike.
        </p>

        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities
          that occur under your account. Any misuse of the platform, including disruptive behavior or
          unauthorized content sharing, may result in account suspension or termination.
        </p>

        <p>
          Content provided on Paathshala — including courses, videos, and downloadable materials is protected
          by intellectual property laws and is intended solely for personal, non-commercial use unless otherwise stated.
        </p>

        <p>
          We reserve the right to update or modify these terms at any time. Continued use of the platform after
          such changes constitutes acceptance of the revised terms.
        </p>

        <p>
          For any questions regarding these terms, feel free to
          <a href="/contact-us" className="text-blue-600 underline ml-1">contact our support team</a>.
        </p>
      </div>
    </PageLayout>
  );
}
