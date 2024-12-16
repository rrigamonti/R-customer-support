import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  content: string[];
}

export function ContactInfo({ icon: Icon, title, content }: ContactInfoProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <Icon className="h-5 w-5 mr-2" />
        {title}
      </h3>
      <p className="text-gray-600">
        {content.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < content.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}