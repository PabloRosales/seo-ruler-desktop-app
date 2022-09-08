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
        icon: 'fas fa-home',
        to: '/',
        active: true,
      },
      {
        key: 'keywords',
        name: 'Keywords',
        icon: 'fas fa-key',
        to: '/keywords',
        active: false,
      },
      {
        key: 'entities',
        name: 'Entities',
        icon: 'fas fa-cubes',
        to: '/entities',
        active: false,
      },
      {
        key: 'content',
        name: 'Content',
        icon: 'fas fa-paperclip',
        to: '/content',
        active: false,
      },
      {
        key: 'serp',
        name: 'SERP',
        icon: 'fab fa-google',
        to: '/serp',
        active: false,
      },
      {
        key: 'on-page',
        name: 'On-Page',
        icon: 'fas fa-map',
        to: '/on-page',
        active: false,
      },
      {
        key: 'utilities',
        name: 'Utilities',
        icon: 'fas fa-code-compare',
        to: '/utilities',
        active: false,
      },
      {
        key: 'settings',
        name: 'Settings',
        icon: 'fas fa-cog',
        to: '/settings',
        active: false,
      },
    ],
  },
});
