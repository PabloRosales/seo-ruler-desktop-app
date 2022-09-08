import { PageHeader } from '../common/components/PageHeader';
import { ButtonsBar } from '../common/components/ButtonsBar';
import { Button } from '../common/components/Button';
import { SearchInput } from '../common/components/SearchInput';
import { KeywordsList } from './KeywordsList';
import { useKeywords } from './useKeywords';

export const Keywords = () => {
  const { onSearch, search, keywords } = useKeywords();

  return (
    <div>
      <PageHeader title="Keywords" icon="fas fa-paperclip" />
      <ButtonsBar className="mt-6">
        <Button icon="fas fa-upload" buttonStyle="primary">
          Load CSV
        </Button>
        <Button icon="fas fa-download" buttonStyle="primary">
          Save CSV
        </Button>
      </ButtonsBar>
      <div className="w-full mt-8">
        <SearchInput onChange={onSearch} placeholder="Search Keywords" value={search} />
      </div>
      <div className="mt-5">
        <KeywordsList keywords={keywords} />
      </div>
    </div>
  );
};
