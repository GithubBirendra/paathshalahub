import PageLayout from "@/components/layout/pageLayout";
import React from "react";
export default function ContactUsPage() {
  return (
    <PageLayout
      title="Contact Us"
      description="Have any questions or feedback? We'd love to hear from you!"
    >
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label className="block mb-1 text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="col-span-1">
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 text-gray-700 font-medium">Message</label>
          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </PageLayout>
  );
}
