import React from 'react';
import { Clock, Globe2, PhoneCall } from 'lucide-react';

const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Portuguese'];

export default function Contact() {
  return (
    <div className="bg-white py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Business Hours
              </h3>
              <p className="text-gray-600">
                24/7 Support Available
                <br />
                Response Time: &lt; 5 minutes
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe2 className="h-5 w-5 mr-2" />
                Languages Supported
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                Direct Contact
              </h3>
              <p className="text-gray-600">
                US: +1 (555) 123-4567
                <br />
                UK: +44 (20) 7123 4567
                <br />
                support@globalcustomercare.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}