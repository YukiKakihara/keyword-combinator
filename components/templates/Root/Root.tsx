import React from 'react';
import styled from '@emotion/styled';
import { useKeywordCounties } from './hooks/useKeywordCounties';
import { Title } from './Title';

type Props = {
  addKeywordCountyCategory: () => void;
  className?: string;
  keywordCounties: string[];
  updateKeywordList: (newkeywordCounty: string, listIndex: number) => void;
};

type ContainerProps = {
  className?: string;
};

export const Component: React.VFC<Props> = ({
  addKeywordCountyCategory,
  className,
  keywordCounties,
  updateKeywordList,
}) => {
  return (
    <Wrapper className={className}>
      <WrappedTitle />
      {keywordCounties.map((keywordCounty, index) => (
        <React.Fragment key={index}>
          <div>カテゴリ{index + 1}</div>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              updateKeywordList(e.target.value, index)
            }
            value={keywordCounty}
          />
        </React.Fragment>
      ))}
      <div onClick={addKeywordCountyCategory}>+</div>
    </Wrapper>
  );
};

export const Root: React.VFC<ContainerProps> = ({ className }) => {
  const { addKeywordCountyCategory, keywordCounties, updateKeywordList } =
    useKeywordCounties();

  return (
    <Component
      addKeywordCountyCategory={addKeywordCountyCategory}
      className={className}
      keywordCounties={keywordCounties}
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
