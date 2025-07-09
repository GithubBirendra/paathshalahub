import PageLayout from "@/components/layout/pageLayout";
import React from "react";

export default function FAQPage() {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Have questions? We’ve got answers. Here are some of the most common queries from our learners."
    >
      <div className="space-y-10 text-gray-700">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">📝 How do I register for a course?</h3>
          <p className="mt-2 text-base">
            Getting started is simple. Browse through our course catalog, select the course that suits you, and click
            on the <strong>“Enroll Now”</strong> button. Just follow the on-screen instructions to complete your registration
            within minutes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">💳 What payment methods are available?</h3>
          <p className="mt-2 text-base">
            We accept all major credit and debit cards, PayPal, and region-specific payment gateways to ensure a
            smooth checkout process. Your transactions are secure and encrypted for your protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">🎓 Will I receive a certificate?</h3>
          <p className="mt-2 text-base">
            Absolutely! Upon successful completion of any course, you’ll be awarded a digitally verifiable certificate.
            You can proudly share it on your resume, LinkedIn profile, or with potential employers to showcase your
            achievement.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">📅 Can I learn at my own pace?</h3>
          <p className="mt-2 text-base">
            Yes! Most of our courses are self-paced, allowing you to learn anytime, anywhere — at a rhythm that works
            best for you. You’re in full control of your learning journey.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">📧 Need more help?</h3>
          <p className="mt-2 text-base">
            If your question isn’t listed here, our support team is happy to help. Reach out via our 
            <a href="/contact-us" className="text-blue-600 underline ml-1">Contact Us</a> page, and we'll get back to you promptly.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
