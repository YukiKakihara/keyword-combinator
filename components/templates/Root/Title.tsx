import React from 'react';
import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';

type Props = {
  className?: string;
};

export const Component: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Main>複合キーワード生成</Main>
      <Sub>最大100カテゴリまでの複合キーワードを生成します</Sub>
    </Wrapper>
  );
};

export const Title: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({
  textAlign: 'center',
});

const Main = styled.div(
  mq({
    fontSize: [24, 36],
  })
);

const Sub = styled.div(
  mq({
    fontsize: [12, 16],
  })
);
