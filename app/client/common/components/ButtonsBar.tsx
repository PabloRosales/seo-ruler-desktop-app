import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

interface ButtonsBarProps {
  children: ReactNode;
  className?: string;
}

export const ButtonsBar = ({ children, className }: ButtonsBarProps) => {
  return <div className={classNames('flex justify-center items-center gap-x-4 gap-y-2', className)}>{children}</div>;
};
