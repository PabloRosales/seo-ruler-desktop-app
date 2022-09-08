import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className={classNames('bg-white dark:bg-gray-800 px-5 py-5 rounded shadow text-white', className)}>
      {children}
    </div>
  );
};
