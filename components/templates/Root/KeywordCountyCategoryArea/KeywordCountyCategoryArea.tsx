import React from 'react';
import styled from '@emotion/styled';
import { KeywordCategory } from '../KeywordCategory';

type Props = {
  className?: string;
  keywordCounties: string[];
  updateKeywordCounties: (
    newkeywordCounty: string,
    categoryIndex: number
  ) => void;
};

export const Component: React.VFC<Props> = ({
  className,
  keywordCounties,
  updateKeywordCounties,
}) => {
  return (
    <Wrapper className={className}>
      {keywordCounties.map((keywordCounty, index) => (
        <KeywordCategory
          key={index}
          categoryNum={index + 1}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            updateKeywordCounties(e.target.value, index)
          }
          value={keywordCounty}
        />
      ))}
    </Wrapper>
  );
};

export const KeywordCountyCategoryArea: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({});
