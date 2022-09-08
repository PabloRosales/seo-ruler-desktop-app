import { classNames } from '../helpers/classNames';

interface SearchInputProps {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}

export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  return (
    <div className="relative">
      <input
        value={value}
        className={classNames(
          'w-full py-2 pr-10 pl-3 shadow rounded-md',
          'text-sm text-gray-900 dark:bg-gray-700 dark:placeholder:text-gray-400 dark:text-white',
          'focus:ring-blue-500 focus:border-blue-500 focus:outline-none',
        )}
        placeholder={placeholder}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <button
        className={classNames('absolute block inset-y-0 right-0 mr-4 flex items-center', value === '' ? 'hidden' : '')}
        onClick={() => onChange('')}
      >
        <i className="fa-solid fa-times dark:text-gray-300" aria-hidden="true" />
      </button>
    </div>
  );
};
