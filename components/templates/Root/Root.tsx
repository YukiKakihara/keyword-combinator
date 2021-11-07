import React from 'react';
import styled from '@emotion/styled';
import { Title } from './Title';

type Props = {
  className?: string;
};

export const Component: React.VFC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <WrappedTitle />
    </Wrapper>
  );
};

export const Root: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({
  padding: '50px 100px',
});

const WrappedTitle = styled(Title)({
  // margin: '0 auto',
});
