import { SidebarItem } from '../components/Sidebar';
import { useRecoilState } from 'recoil';
import { AtomNav } from '../atoms/AtomNav';

export const useNav = () => {
  const [navState, setNavState] = useRecoilState(AtomNav);

  return {
    nav: navState.nav,
    onChange: (e: string) => {
      const nav = navState.nav.map((item: SidebarItem) => {
        return {
          ...item,
          active: item.key === e,
        };
      });
      setNavState({ nav });
    },
    onDisable: (e: string) => {
      const nav = navState.nav.map((item: SidebarItem) => {
        if (item.key === e) {
          item.disabled = true;
        }
        return item;
      });
      setNavState({ nav });
    },
  };
};
