import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';

interface ITableHeader {
  label: string;
  className?: string;
}

interface TableProps<T> {
  rows: T[];
  headers: ITableHeader[];
  renderRow: (item: T) => ReactNode;
  className?: string;
  emptyContent?: ReactNode;
}

export const Table = <T,>({ emptyContent, className, headers, rows, renderRow }: TableProps<T>) => {
  return (
    <table className={classNames('min-w-full border-none divide-y divide-gray-300 rounded-md', className)}>
      <thead className="bg-gray-200 select-none">
        <tr>
          {headers.map((header, i) => {
            return (
              <th
                scope="col"
                key={`header-${header.label}`}
                className={classNames(
                  'text-left text-xs uppercase font-medium text-white py-4',
                  i === 0 ? 'pl-8' : 'pl-3',
                  header.className,
                )}
              >
                {header.label || <span>&nbsp;</span>}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {rows.length === 0 && emptyContent && <tr>{emptyContent}</tr>}
        {rows.length > 0 &&
          rows.map((row, i) => {
            return (
              <tr key={`row-${i}`} className={i % 2 === 0 ? undefined : 'bg-gray-100'}>
                {renderRow(row)}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
