import React from 'react';
import styled from '@emotion/styled';
import { KeywordCategory } from '../KeywordCategory';

type Props = {
  className?: string;
  keywordCounties: string[];
  updateKeywordList: (newkeywordCounty: string, listIndex: number) => void;
};

export const Component: React.VFC<Props> = ({
  className,
  keywordCounties,
  updateKeywordList,
}) => {
  return (
    <Wrapper className={className}>
      {keywordCounties.map((keywordCounty, index) => (
        <KeywordCategory
          key={index}
          categoryNum={index + 1}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            updateKeywordList(e.target.value, index)
          }
          value={keywordCounty}
        />
      ))}
    </Wrapper>
  );
};

export const KeywordListArea: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({});
