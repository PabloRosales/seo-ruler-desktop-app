import { classNames } from '../helpers/classNames';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

export interface SidebarItem {
  name: string;
  icon: string;
  href: string;
  count?: number;
  current: boolean;
}

interface SidebarProps {
  navigation: SidebarItem[];
}

export const Sidebar = ({ navigation }: SidebarProps) => {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
      <div className="flex flex-1 flex-col overflow-y-auto pt-3 pb-4">
        <nav className="flex-1 space-y-1 bg-gray-800 px-2" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              )}
            >
              <i
                className={classNames(
                  item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0',
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
                    'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </Link>
          ))}
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
