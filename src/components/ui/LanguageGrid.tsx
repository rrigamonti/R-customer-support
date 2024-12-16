import React from 'react';

const languages = [
  'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese',
  'Arabic', 'Portuguese', 'Russian', 'Korean', 'Italian', 'Dutch',
  'Hindi', 'Turkish', 'Vietnamese', 'Thai'
];

export function LanguageGrid() {
  return (
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
  );
}