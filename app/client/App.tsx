import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ErrorBoundary } from './common/components/ErrorBoundary';
import { AtomNotifications } from './common/atoms/AtomNotifications';
import { NotificationArea } from './common/components/NotificationArea';
import { Dashboard } from './dashboard/Dashboard';
import { Sidebar, SidebarItem } from './common/components/Sidebar';

export const App = () => {
  const [notifications, setNotifications] = useRecoilState(AtomNotifications);

  const nav: SidebarItem[] = [
    {
      name: 'Dashboard',
      icon: 'home',
      href: '/',
      current: true,
    },
  ];

  return (
    <ErrorBoundary>
      <NotificationArea
        notifications={notifications}
        onClose={(id) => {
          setNotifications(notifications.filter((n) => n.id !== id));
        }}
      />
      <div className="flex">
        <div className="fixed inset-y-0 flex w-64 flex-col">
          <Sidebar navigation={nav} />
        </div>
        <div className="md:pl-64 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </ErrorBoundary>
  );
};
