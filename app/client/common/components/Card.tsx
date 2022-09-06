import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      style={{ boxShadow: '0 0 2px 0 rgb(0 0 0 / 10%), 0 1px 4px 0 rgb(0 0 0 / 20%)' }}
      className={classNames('bg-white border-b border-gray-200 rounded-lg pl-6 pr-5 py-6', className)}
    >
      {children}
    </div>
  );
};
