import React from 'react';
import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';
import { useKeywordCounties } from './hooks/useKeywordCounties';
import { useResult } from './hooks/useResult';
import { Title } from './Title';
import { KeywordCountyCategoryArea } from './KeywordCountyCategoryArea';
import { Result } from './Result';

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

export const Component: React.FC<Props> = ({
  addKeywordCountyCategory,
  className,
  keywordCounties,
  result,
  updateKeywordCounties,
}) => {
  return (
    <Wrapper className={className}>
      <WrappedTitle />
      <WrappedKeywordCountyCategoryArea
        addKeywordCountyCategory={addKeywordCountyCategory}
        keywordCounties={keywordCounties}
        updateKeywordCounties={updateKeywordCounties}
      />
      <WrappedResult value={result} />
    </Wrapper>
  );
};

export const Root: React.FC<ContainerProps> = ({ className }) => {
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

const Wrapper = styled.div(
  mq({
    padding: ['50px 15px', '50px 100px'],
  })
);

const WrappedTitle = styled(Title)({
  marginBottom: 60,
});

const WrappedKeywordCountyCategoryArea = styled(KeywordCountyCategoryArea)({
  marginBottom: 30,
});

const WrappedResult = styled(Result)(
  mq({
    margin: '0 auto',
    width: [250, 300],
  })
);
