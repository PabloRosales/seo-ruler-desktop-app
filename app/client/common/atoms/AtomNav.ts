import { atom } from 'recoil';
import { SidebarItem } from '../components/Sidebar';

export interface INav {
  nav: SidebarItem[];
}

export const AtomNav = atom<INav>({
  key: 'AtomNav',
  default: {
    nav: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'fa-solid fa-home',
        to: '/',
        active: true,
      },
      {
        key: 'keywords',
        name: 'Keywords',
        icon: 'fa-solid fa-key',
        to: '/keywords',
        active: false,
        disabled: true,
      },
    ],
  },
});
