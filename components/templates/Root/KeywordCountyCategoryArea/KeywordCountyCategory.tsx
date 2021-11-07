import React from 'react';
import styled from '@emotion/styled';
import { mq } from 'utils/mediaQuery';
import { Textarea } from 'components/uiParts/Textarea';

type Props = {
  categoryNum: number;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Component: React.VFC<Props> = ({
  categoryNum,
  className,
  ...textareaProps
}) => {
  return (
    <Wrapper className={className}>
      <Title>カテゴリ{categoryNum}</Title>
      <WrappedTextarea {...textareaProps} />
    </Wrapper>
  );
};

export const KeywordCountyCategory: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({});

const Title = styled.div({});

const WrappedTextarea = styled(Textarea)(
  mq({
    height: [300, 400],
    minWidth: [150, 300],
  })
);
