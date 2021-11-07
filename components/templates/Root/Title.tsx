import React from 'react';
import styled from '@emotion/styled';

type Props = {
  className?: string;
};

export const Component: React.VFC<Props> = ({ className }) => {
  return <Wrapper className={className}>複合キーワード生成</Wrapper>;
};

export const Title: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({
  fontSize: 36,
  textAlign: 'center',
});
