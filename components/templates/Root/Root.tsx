import React from 'react';
import styled from '@emotion/styled';

type Props = {
  className?: string;
};

export const Component: React.VFC<Props> = ({ className }) => {
  return <Wrapper className={className}>hoge</Wrapper>;
};

export const Root: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({});
