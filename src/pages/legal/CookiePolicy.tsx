import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          {/* Previous content remains the same until contact section */}
          
          <h2>6. Contact Us</h2>
          <p>If you have questions about our Cookie Policy, please contact us at support@ragamarketing.com</p>
        </div>
      </div>
    </div>
  );
}