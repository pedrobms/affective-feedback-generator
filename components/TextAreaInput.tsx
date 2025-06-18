
import React from 'react';

interface TextAreaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, placeholder, disabled }) => {
  return (
    <div>
      <label htmlFor="user-text" className="block text-sm font-medium text-slate-300 mb-1">
        Seu Texto:
      </label>
      <textarea
        id="user-text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={10}
        className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-100 placeholder-slate-400 transition-colors duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};
