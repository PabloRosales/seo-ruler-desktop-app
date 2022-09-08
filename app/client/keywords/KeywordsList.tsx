interface KeywordsListProps {
  keywords: string[];
}

export const KeywordsList = ({ keywords }: KeywordsListProps) => {
  return (
    <div>
      {keywords.map((keyword, i) => {
        return <div key={`${i}-${keyword}`}>{keyword}</div>;
      })}
    </div>
  );
};
