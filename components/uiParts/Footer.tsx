import React from 'react';
import styled from '@emotion/styled';

type Props = {
  className?: string;
};

export const Component: React.VFC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Link
        href="https://github.com/YukiKakihara/keyword-combinator"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        https://github.com/YukiKakihara/keyword-combinator
      </Link>
    </Wrapper>
  );
};

export const Footer: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({
  padding: '30px 50px',
});

const Link = styled.a({
  textDecoration: 'underline',
});
