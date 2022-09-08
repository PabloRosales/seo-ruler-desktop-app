import { ReactNode } from 'react';

interface AlertProps {
  id?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
  compact?: boolean;
}

export const Alert = ({ compact, className, id, children, onClose }: AlertProps) => {
  return (
    <div className={`alert rounded-md bg-red-50 dark:bg-red-900 p-4 select-none ${className}`} id={id}>
      <div className="flex items-center">
        {compact ? undefined : (
          <div className="flex-shrink-0">
            <i className="fa-solid fa-warning text-red-400 dark:text-red-100" aria-hidden="true" />
          </div>
        )}
        <div className="ml-3 dark:text-white">{children}</div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
              >
                <span className="sr-only">Dismiss</span>
                <i className="fa-solid fa-times" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
