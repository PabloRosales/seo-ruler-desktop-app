import { INotification } from '../atoms/AtomNotifications';
import { Notification } from './Notification';

interface NotificationProps {
  notifications: INotification[];
  onClose: (id: string) => void;
}

export const NotificationArea = ({ notifications, onClose }: NotificationProps) => {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-30"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              onClose={() => onClose(notification.id)}
              title={notification.title}
              message={notification.message}
              type={notification.type}
            />
          );
        })}
      </div>
    </div>
  );
};
