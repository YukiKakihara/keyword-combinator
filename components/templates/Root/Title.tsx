import React from 'react';
import styled from '@emotion/styled';

type Props = {
  className?: string;
};

export const Component: React.VFC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Main>複合キーワード生成</Main>
      <Sub>最大100カテゴリまでの複合キーワードを生成します</Sub>
    </Wrapper>
  );
};

export const Title: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({
  textAlign: 'center',
});

const Main = styled.div({
  fontSize: 36,
});

const Sub = styled.div({
  fontsize: 16,
});
