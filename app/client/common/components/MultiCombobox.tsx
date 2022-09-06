import { classNames } from '../helpers/classNames';
import { useState } from 'react';
import { Listbox } from '@headlessui/react';

interface SelectProps<T extends string> {
  defaultSelected?: T[];
  options: [T, ...T[]];
  label: string;
  onChange: (s: T[]) => void;
  name: string;
  disabled?: boolean;
}

export const MultiSelect = <T extends string>({
  name,
  disabled,
  onChange,
  defaultSelected,
  options,
  label,
}: SelectProps<T>) => {
  const [selected, setSelected] = useState<T[]>(defaultSelected || []);

  if (options.length === 0) {
    throw new Error('No options provided');
  }

  if (defaultSelected && defaultSelected.some((o) => !options.includes(o))) {
    throw new Error(`Invalid default selected values: ${defaultSelected}`);
  }

  return (
    <div id={`multi-select-${name}`}>
      <Listbox
        name={name}
        disabled={disabled}
        value={selected}
        onChange={(s) => {
          setSelected(s);
          onChange(s);
        }}
        multiple
      >
        <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button
            name={`button-${name}`}
            title={selected.length > 0 ? selected.join(', ') : undefined}
            className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <span className="block truncate">
              {selected.length > 0 ? selected.join(', ') : <span className="text-gray-500">Select an Option</span>}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <i className="fa-solid fa-chevron-down text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
      {selected.length > 1 && <div className="text-xs mt-1.5 text-gray-500">{selected.join(', ')}</div>}
    </div>
  );
};
