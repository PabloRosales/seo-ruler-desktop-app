import React from 'react';

interface IFormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const FormLabel = ({ children, htmlFor }: IFormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};
