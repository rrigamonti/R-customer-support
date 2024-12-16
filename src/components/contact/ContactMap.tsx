import React from 'react';

export function ContactMap() {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.3046700884747!2d-3.7161968233715587!3d56.07274897855043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48862e0d6c3f8a6b%3A0x7c3da79f4d5c7e0!2sStandalane%2C%20Kincardine%2C%20UK!5e0!3m2!1sen!2sus!4v1709236391484!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}