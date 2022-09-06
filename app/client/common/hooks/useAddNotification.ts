import { useSetRecoilState } from 'recoil';
import { AtomNotifications, INotification } from '../atoms/AtomNotifications';
import { useId } from 'react';

export const useAddNotification = () => {
  const id = useId();
  const setNotifications = useSetRecoilState(AtomNotifications);
  return (notification: Omit<INotification, 'id'>) => {
    setNotifications((notifications) => [
      ...notifications,
      {
        id,
        ...notification,
      },
    ]);
  };
};
