import { atom } from 'recoil';

export interface IAtomSettings {
  projectDirectory: string;
}

export const AtomSettings = atom<IAtomSettings>({
  key: 'AtomSettings',
  default: {
    projectDirectory: '',
  },
});
