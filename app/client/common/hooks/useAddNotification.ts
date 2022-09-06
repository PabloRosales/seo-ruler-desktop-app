import { v4 as uuid } from 'uuid';
import { useSetRecoilState } from 'recoil';
import { AtomNotifications, INotification } from '../atoms/AtomNotifications';

export const useAddNotification = () => {
  const setNotifications = useSetRecoilState(AtomNotifications);
  return (notification: Omit<INotification, 'id'>) => {
    setNotifications((notifications) => [
      ...notifications,
      {
        id: uuid(),
        ...notification,
      },
    ]);
  };
};
