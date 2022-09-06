import { atom } from 'recoil';

export interface INotification {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'error';
}
export const AtomNotifications = atom<INotification[]>({
  key: 'AtomNotifications',
  default: [],
});
