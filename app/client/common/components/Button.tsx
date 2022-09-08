import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

export interface ButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  buttonStyle?: 'default' | 'primary' | 'danger';
  icon?: string;
}

export const Button = ({ type, buttonStyle, icon, className, disabled, onClick, children }: ButtonProps) => {
  const isDanger = buttonStyle === 'danger' && !disabled;
  const isDefault = (!buttonStyle || buttonStyle === 'default') && !disabled;
  const isPrimary = buttonStyle === 'primary' && !disabled;

  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        'select-none flex items-center text-sm px-4 py-1.5 rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        disabled && 'disabled focus:ring-gray-500 bg-gray-400 dark:bg-gray-800 text-gray-500 dark:text-gray-600',
        isDanger &&
          'danger focus:ring-red-500 bg-red-600 dark:bg-red-800 hover:bg-red-700 dark:hover:bg-red-700 text-white',
        isPrimary && 'primary shadow focus:ring-blue-700 bg-blue-700 hover:bg-blue-800 text-white',
        isDefault && 'default focus:ring-gray-700 bg-gray-700 hover:bg-gray-800 text-white',
        className,
      )}
    >
      {icon && <i className={classNames(icon, 'mr-2 fa-sm')} />}
      <div>{children}</div>
    </button>
  );
};
