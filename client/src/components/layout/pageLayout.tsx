import React from "react";

type PageLayoutProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => (
  <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
      <p className="text-center text-gray-600 mb-10">{description}</p>
      {children}
    </div>
  </section>
);

export default PageLayout;
