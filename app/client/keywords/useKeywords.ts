import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { AtomKeywords } from '../common/atoms/AtomKeywords';

export const useKeywords = () => {
  const [kws, setKws] = useRecoilState(AtomKeywords);
  const [search, setSearch] = useState('');

  return {
    keywords: kws.keywords.filter((kw) => kw.includes(search)),
    onSearch: setSearch,
    search,
  };
};
