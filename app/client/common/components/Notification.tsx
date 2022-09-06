import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '../helpers/classNames';

interface NotificationProps {
  title: string;
  message?: string;
  onClose: () => void;
  type?: 'success' | 'error';
}

export const Notification = ({ title, message, onClose, type }: NotificationProps) => {
  return (
    <Transition
      show={true}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={classNames(
          'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5',
          type === 'success' && 'bg-green-50',
          type === 'error' && 'bg-red-50',
        )}
      >
        <div className="p-4">
          <div className={classNames('flex', !message ? 'items-center' : 'items-start')}>
            <div className="flex-shrink-0">
              {!type && <i className="fa-solid fa-exclamation text-blue-400" aria-hidden="true" />}
              {type === 'success' && <i className="fa-solid fa-circle-check text-green-400" aria-hidden="true" />}
              {type === 'error' && <i className="fa-solid fa-triangle-exclamation text-red-400" aria-hidden="true" />}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              {message && <p className="mt-1 text-sm text-gray-500">{message}</p>}
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className={classNames(
                  'inline-flex items-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2',
                  type === 'success' && 'bg-green-50',
                  type === 'error' && 'bg-red-50',
                )}
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <i className="fa-solid fa-times" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
