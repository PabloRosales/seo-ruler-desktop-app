import React from 'react';
import { classNames } from '../helpers/classNames';

interface IFormInputProps {
  id?: string;
  name?: string;
  hasError?: boolean;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  type?: 'text' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const FormInput = ({
  placeholder,
  hasError,
  disabled,
  type,
  id,
  name,
  onChange,
  fullWidth,
  value,
}: IFormInputProps) => {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          value={value}
          type={type}
          name={name}
          id={id}
          disabled={disabled}
          className={classNames(
            'block w-full py-2 pl-3 pr-10 focus:outline-none sm:text-sm rounded-md',
            'border border-gray-200',
            hasError
              ? 'border-red-300 text-red-900 placeholder-red-400 focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500',
            fullWidth ? 'w-full' : 'w-auto',
          )}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={`${name}-error`}
          onChange={onChange}
        />
        {hasError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <i className="h-5 w-5 fa-solid fa-warning text-red-300" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
};
