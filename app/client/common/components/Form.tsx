import { ReactNode } from 'react';

interface FormProps {
  id: string;
  children: ReactNode;
  onSubmit: () => void;
  className?: string;
}

export const Form = ({ id, className, onSubmit, children }: FormProps) => {
  return (
    <form
      id={id}
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};
