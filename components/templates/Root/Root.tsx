import React from 'react';
import styled from '@emotion/styled';
import { useKeywordCounties } from './hooks/useKeywordCounties';
import { useResult } from './hooks/useResult';
import { Title } from './Title';
import { KeywordCountyCategoryArea } from './KeywordCountyCategoryArea';

type Props = {
  addKeywordCountyCategory: () => void;
  className?: string;
  keywordCounties: string[];
  result: string;
  updateKeywordCounties: (
    newkeywordCounty: string,
    categoryIndex: number
  ) => void;
};

type ContainerProps = {
  className?: string;
};

export const Component: React.VFC<Props> = ({
  addKeywordCountyCategory,
  className,
  keywordCounties,
  result,
  updateKeywordCounties,
}) => {
  return (
    <Wrapper className={className}>
      <WrappedTitle />
      <KeywordCountyCategoryArea
        addKeywordCountyCategory={addKeywordCountyCategory}
        keywordCounties={keywordCounties}
        updateKeywordCounties={updateKeywordCounties}
      />
      <div>結果</div>
      <textarea readOnly value={result} />
    </Wrapper>
  );
};

export const Root: React.VFC<ContainerProps> = ({ className }) => {
  const { addKeywordCountyCategory, keywordCounties, updateKeywordCounties } =
    useKeywordCounties();
  const result = useResult(keywordCounties);

  return (
    <Component
      addKeywordCountyCategory={addKeywordCountyCategory}
      className={className}
      keywordCounties={keywordCounties}
      result={result}
      updateKeywordCounties={updateKeywordCounties}
    />
  );
};

const Wrapper = styled.div({
  padding: '50px 100px',
});

const WrappedTitle = styled(Title)({
  marginBottom: 60,
});
