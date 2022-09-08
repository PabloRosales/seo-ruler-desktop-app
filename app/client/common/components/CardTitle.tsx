import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

interface CardTitleProps {
  icon?: string;
  className?: string;
  children: ReactNode;
}

export const CardTitle = ({ children, className, icon }: CardTitleProps) => {
  return (
    <h2
      className={classNames(
        'text-xl text-gray-600 dark:text-blue-300 select-none font-medium leading-none mb-3 flex items-center',
        className,
      )}
    >
      {icon && <i className={classNames('text-blue-500 mr-2', icon, 'fa-xs')} />}
      {children}
    </h2>
  );
};
