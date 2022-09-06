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
          'text-[13px] text-gray-900 py-2 pr-10 pl-5 focus:outline-none shadow rounded-full',
          'placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500',
        )}
        placeholder={placeholder}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <button
        className={classNames('absolute block inset-y-0 right-0 mr-3 flex items-center', value === '' ? 'hidden' : '')}
        onClick={() => onChange('')}
      >
        <i className="h-5 w-5 fa-solid fa-times text-blue-800" aria-hidden="true" />
      </button>
    </div>
  );
};
