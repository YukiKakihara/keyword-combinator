import React from 'react';
import styled from '@emotion/styled';
import { useKeywordCounties } from './hooks/useKeywordCounties';
import { useResult } from './hooks/useResult';
import { Title } from './Title';
import { KeywordListArea } from './KeywordListArea';

type Props = {
  addKeywordCountyCategory: () => void;
  className?: string;
  keywordCounties: string[];
  result: string;
  updateKeywordList: (newkeywordCounty: string, listIndex: number) => void;
};

type ContainerProps = {
  className?: string;
};

export const Component: React.VFC<Props> = ({
  addKeywordCountyCategory,
  className,
  keywordCounties,
  result,
  updateKeywordList,
}) => {
  return (
    <Wrapper className={className}>
      <WrappedTitle />
      <KeywordListArea
        keywordCounties={keywordCounties}
        updateKeywordList={updateKeywordList}
      />
      <div onClick={addKeywordCountyCategory}>+</div>
      <div>結果</div>
      <textarea readOnly value={result} />
    </Wrapper>
  );
};

export const Root: React.VFC<ContainerProps> = ({ className }) => {
  const { addKeywordCountyCategory, keywordCounties, updateKeywordList } =
    useKeywordCounties();
  const result = useResult(keywordCounties);

  return (
    <Component
      addKeywordCountyCategory={addKeywordCountyCategory}
      className={className}
      keywordCounties={keywordCounties}
      result={result}
      updateKeywordList={updateKeywordList}
    />
  );
};

const Wrapper = styled.div({
  padding: '50px 100px',
});

const WrappedTitle = styled(Title)({
  marginBottom: 60,
});
