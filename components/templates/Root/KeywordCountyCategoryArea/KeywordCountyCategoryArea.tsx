import React from 'react';
import styled from '@emotion/styled';
import { KeywordCountyCategory } from './KeywordCountyCategory';

type Props = {
  addKeywordCountyCategory: () => void;
  className?: string;
  keywordCounties: string[];
  updateKeywordCounties: (
    newkeywordCounty: string,
    categoryIndex: number
  ) => void;
};

export const Component: React.VFC<Props> = ({
  addKeywordCountyCategory,
  className,
  keywordCounties,
  updateKeywordCounties,
}) => {
  return (
    <Wrapper className={className}>
      {keywordCounties.map((keywordCounty, index) => (
        <WrappedKeywordCountyCategory
          key={index}
          categoryNum={index + 1}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            updateKeywordCounties(e.target.value, index)
          }
          value={keywordCounty}
        />
      ))}
      <AddIcon onClick={addKeywordCountyCategory}>+</AddIcon>
    </Wrapper>
  );
};

export const KeywordCountyCategoryArea: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  padding: '0 60px 30px 0',
});

const WrappedKeywordCountyCategory = styled(KeywordCountyCategory)({
  marginRight: 30,
  height: 400,
  minWidth: 300,
});

const AddIcon = styled.div({
  cursor: 'pointer',
});
