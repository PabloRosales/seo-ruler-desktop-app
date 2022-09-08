import { atom } from 'recoil';
import { SidebarItem } from '../components/Sidebar';

export interface INav {
  active: string;
  nav: SidebarItem[];
}

export const AtomNav = atom<INav>({
  key: 'AtomNav',
  default: {
    active: 'dashboard',
    nav: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'fas fa-home',
        to: '/',
      },
      {
        key: 'keywords',
        name: 'Keywords',
        icon: 'fas fa-key',
        to: '/keywords',
      },
      {
        key: 'entities',
        name: 'Entities',
        icon: 'fas fa-cubes',
        to: '/entities',
      },
      {
        key: 'content',
        name: 'Content',
        icon: 'fas fa-paperclip',
        to: '/content',
      },
      {
        key: 'serp',
        name: 'SERP',
        icon: 'fab fa-google',
        to: '/serp',
      },
      {
        key: 'on-page',
        name: 'On-Page',
        icon: 'fas fa-map',
        to: '/on-page',
      },
      {
        key: 'utilities',
        name: 'Utilities',
        icon: 'fas fa-code-compare',
        to: '/utilities',
      },
      {
        key: 'settings',
        name: 'Settings',
        icon: 'fas fa-cog',
        to: '/settings',
      },
    ],
  },
});
