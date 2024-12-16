import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What languages do you support?',
    answer: 'We provide support in over 16 languages including English, Spanish, French, German, Chinese, Japanese, Arabic, and more. All support is provided by native speakers.'
  },
  {
    question: 'How quickly can you respond to inquiries?',
    answer: 'Our AI-enhanced support system allows us to respond to most inquiries in less than 1 minute. Complex issues are escalated to specialized agents while maintaining rapid response times.'
  },
  {
    question: 'Do you provide 24/7 support?',
    answer: 'Yes, our support team is available 24/7, 365 days a year. We maintain consistent service quality across all time zones.'
  },
  {
    question: 'How do you handle data security?',
    answer: 'We maintain the highest standards of data security with bank-grade encryption, regular security audits, and full compliance with GDPR and other relevant regulations.'
  }
];

export function ContactFAQ() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find quick answers to common questions
          </p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                  <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}