import PageLayout from "@/components/layout/pageLayout";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="We respect your privacy and are committed to protecting your personal data."
    >
      <div className="text-gray-700 space-y-6 leading-relaxed">
        <p>
          At <strong>Paathshala</strong>, your privacy is not just a priority — it's a promise. This Privacy Policy
          explains how we collect, use, and protect your personal information when you interact with our platform.
        </p>

        <p>
          We collect only the data necessary to provide you with a smooth and personalized learning experience.
          This may include your name, email address, course history, and usage behavior — all handled with
          utmost care and confidentiality.
        </p>

        <p>
          Your information is never sold or shared with third parties without your explicit consent. We implement
          industry-standard security measures to ensure your data remains safe and secure at all times.
        </p>

        <p>
          By using our services, you agree to the practices described in this policy. We encourage you to review
          it periodically as we may update it to reflect changes in legal or technical requirements.
        </p>

        <p>
          If you have any questions or concerns about your privacy, please don’t hesitate to
          <a href="/contact-us" className="text-blue-600 underline ml-1">contact us</a>.
        </p>
      </div>
    </PageLayout>
  );
}
