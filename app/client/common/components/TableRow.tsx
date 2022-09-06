import { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
}

export const TableRow = ({ colSpan, children, className }: TableRowProps) => {
  return (
    <td colSpan={colSpan} className={`whitespace-nowrap pl-3 py-3 ${className}`}>
      {children}
    </td>
  );
};
