import { SidebarItem } from '../components/Sidebar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AtomNav } from '../atoms/AtomNav';
import { AtomSettings } from '../atoms/AtomSettings';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const settings = useRecoilValue(AtomSettings);
  const [navState, setNavState] = useRecoilState(AtomNav);

  useEffect(() => {
    if (settings.projectDirectory === '' && location.pathname !== '/settings') {
      navigate('/settings');
      setNavState((old) => ({ ...old, active: 'settings' }));
    }
  }, [location.pathname, navigate, setNavState, settings.projectDirectory]);

  const filteredNav =
    settings.projectDirectory === ''
      ? navState.nav.map((opt) => {
          if (opt.key === 'settings') {
            return {
              ...opt,
              active: true,
              disabled: false,
            };
          }
          return { ...opt, disabled: true };
        })
      : navState.nav;

  return {
    nav: filteredNav,
    active: navState.active,
    onChange: (e: string) => {
      setNavState((prev) => ({ ...prev, active: e }));
    },
    onDisable: (e: string) => {
      const nav = navState.nav.map((item: SidebarItem) => {
        if (item.key === e) {
          item.disabled = true;
        }
        return item;
      });
      setNavState((prev) => ({ ...prev, nav }));
    },
  };
};
