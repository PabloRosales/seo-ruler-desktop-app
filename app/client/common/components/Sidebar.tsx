import { classNames } from '../helpers/classNames';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { hasDuplicateValueInKey } from '../helpers/hasDuplicateValueInKey';

export interface SidebarItem {
  key: string;
  name: string;
  icon?: string;
  to: string;
  count?: number;
  active?: boolean;
  disabled?: boolean;
}

interface SidebarProps {
  navigation: SidebarItem[];
  onChange: (e: string) => void;
}

export const Sidebar = ({ navigation, onChange }: SidebarProps) => {
  if (navigation.length === 0) {
    throw new Error('No navigation options provided');
  } else if (hasDuplicateValueInKey(navigation, 'to')) {
    throw new Error('Duplicate paths found');
  } else if (hasDuplicateValueInKey(navigation, 'key')) {
    throw new Error('Duplicate keys found');
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
      <div className="flex flex-1 flex-col overflow-y-auto pt-3 pb-4">
        <nav className="flex-1 space-y-1 bg-gray-800 px-2" aria-label="Sidebar">
          {navigation.map((item) => {
            const icon = (
              <i
                className={classNames(
                  item.disabled
                    ? 'text-gray-600'
                    : item.active
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 pl-0.5 flex-shrink-0',
                  item.icon || 'fas fa-circle',
                )}
                aria-hidden="true"
              />
            );

            const count = item.count ? (
              <span
                className={classNames(
                  item.active ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
                  'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
                )}
              >
                {item.count}
              </span>
            ) : null;

            if (item.disabled) {
              return (
                <div
                  key={item.name}
                  aria-label={item.name}
                  aria-disabled={item.disabled}
                  className={classNames(
                    'disabled text-gray-600',
                    'group flex items-center px-2 py-2 text-sm rounded-md select-none',
                  )}
                >
                  {icon}
                  <span className="flex-1">{item.name}</span>
                  {count}
                </div>
              );
            }

            return (
              <Link
                aria-label={item.name}
                onClick={() => onChange(item.key)}
                key={item.name}
                to={item.to}
                className={classNames(
                  item.active ? 'active bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md select-none',
                )}
              >
                {icon}
                <span className="flex-1">{item.name}</span>
                {count}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-shrink-0 bg-gray-700 p-4 select-none">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-9 w-9 rounded-full" src={logo} alt="SEO Ruler" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">SEO Ruler</p>
            <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">Desktop App</p>
          </div>
        </div>
      </div>
    </div>
  );
};
