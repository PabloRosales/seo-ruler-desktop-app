import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h2
      className={classNames(
        'text-xl text-gray-600 dark:text-blue-300 select-none font-medium leading-none mb-3',
        className,
      )}
    >
      {children}
    </h2>
  );
};
