import { ReactNode } from 'react';

interface ModalActionsProps {
  children: ReactNode;
}

export const ModalActions = ({ children }: ModalActionsProps) => {
  return <div className="flex justify-end gap-x-3 mt-7">{children}</div>;
};
