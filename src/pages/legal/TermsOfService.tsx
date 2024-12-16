import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using our services, you agree to be bound by these Terms of Service...</p>

          <h2>2. Description of Services</h2>
          <p>RagaSupport provides AI-enhanced customer support solutions including but not limited to...</p>

          <h2>3. User Obligations</h2>
          <p>Users agree to provide accurate information and maintain the confidentiality of their account...</p>

          <h2>4. Service Availability</h2>
          <p>While we strive to provide 24/7 service availability, we cannot guarantee uninterrupted access...</p>

          <h2>5. Intellectual Property</h2>
          <p>All content, features, and functionality are owned by RagaSupport and are protected by international copyright laws...</p>

          <h2>6. Limitation of Liability</h2>
          <p>RagaSupport shall not be liable for any indirect, incidental, special, consequential, or punitive damages...</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms...</p>

          <h2>8. Contact Information</h2>
          <p>For any questions regarding these Terms of Service, please contact us at support@ragasupport.com</p>
        </div>
      </div>
    </div>
  );
}