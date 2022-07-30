import React from 'react';
import styled from '@emotion/styled';
import { Textarea } from 'uiParts/Textarea';

type Props = {
  className?: string;
  value: string;
};

export const Component: React.FC<Props> = ({ className, value }) => {
  return (
    <Wrapper className={className}>
      <Title>結果</Title>
      <WrappedTextarea readOnly value={value} />
    </Wrapper>
  );
};

export const Result: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({});

const Title = styled.div({});

const WrappedTextarea = styled(Textarea)({
  height: 400,
  width: '100%',
});
