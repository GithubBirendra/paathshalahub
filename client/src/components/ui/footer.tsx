import React from 'react';
import { BookOpen, Users, Calendar, LayoutDashboard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Paathshala</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering learners worldwide with comprehensive, flexible, and engaging online education. 
              Join our community and unlock your potential today.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Paathshala Learning Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;