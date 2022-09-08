import { atom } from 'recoil';

export interface IAtomKeywords {
  keywords: string[];
}

export const AtomKeywords = atom<IAtomKeywords>({
  key: 'AtomKeywords',
  default: {
    keywords: [],
  },
});
