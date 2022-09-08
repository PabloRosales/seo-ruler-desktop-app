import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ErrorBoundary } from './common/components/ErrorBoundary';
import { AtomNotifications } from './common/atoms/AtomNotifications';
import { NotificationArea } from './common/components/NotificationArea';
import { Dashboard } from './dashboard/Dashboard';
import { Sidebar } from './common/components/Sidebar';
import { useNav } from './common/hooks/useNav';
import { Keywords } from './keywords/Keywords';
import { Entities } from './entities/Entities';
import { Content } from './content/Content';
import { OnPage } from './on-page/OnPage';
import { Settings } from './settings/Settings';
import { Utilities } from './utilities/Utilities';
import { Serp } from './serp/Serp';

export const App = () => {
  const [notifications, setNotifications] = useRecoilState(AtomNotifications);
  const { nav, onChange: onNavChange } = useNav();

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
          <Sidebar navigation={nav} onChange={onNavChange} />
        </div>
        <div className="w-full md:pl-64 m-6">
          <div className="mx-auto max-w-7xl">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/keywords" element={<Keywords />} />
              <Route path="/entities" element={<Entities />} />
              <Route path="/content" element={<Content />} />
              <Route path="/on-page" element={<OnPage />} />
              <Route path="/serp" element={<Serp />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
