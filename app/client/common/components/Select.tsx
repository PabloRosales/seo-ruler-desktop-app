import { classNames } from '../helpers/classNames';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import NonEmptyStringArray from '../../../types/NonEmptyStringArray';

interface SelectProps<T extends string> {
  name: string;
  defaultSelected?: T;
  options: NonEmptyStringArray<T>;
  label: string;
  disabled?: boolean;
  onChange: (s: T) => void;
}

export const Select = <T extends string>({
  onChange,
  disabled,
  defaultSelected,
  options,
  label,
  name,
}: SelectProps<T>) => {
  const [selected, setSelected] = useState<T | undefined>(defaultSelected);

  if (options.length === 0) {
    throw new Error('No options provided');
  }

  if (defaultSelected && !options.includes(defaultSelected)) {
    throw new Error(`Invalid default selected value: ${defaultSelected}`);
  }

  return (
    <div id={`select-${name}`}>
      <Listbox
        name={name}
        disabled={disabled}
        value={selected}
        onChange={(s: T) => {
          setSelected(s);
          onChange(s);
        }}
      >
        <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button
            name={`button-${name}`}
            className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <i className="fa-solid fa-chevron-down text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((item) => (
              <Listbox.Option
                key={item}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-pointer select-none py-2 pl-3 pr-9',
                    active ? 'bg-blue-600 text-white' : 'text-gray-900',
                    `option-${item}`,
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{item}</span>
                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-blue-600',
                        )}
                      >
                        <i className="fa-solid fa-check" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
