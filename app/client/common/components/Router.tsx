import { ReactNode } from 'react';
import { HashRouter } from 'react-router-dom';

export const Router = ({ children }: { children: ReactNode }) => {
  return <HashRouter>{children}</HashRouter>;
};
