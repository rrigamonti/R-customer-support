import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including...</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide and improve our services...</p>

          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information...</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures...</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information...</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us...</p>
        </div>
      </div>
    </div>
  );
}