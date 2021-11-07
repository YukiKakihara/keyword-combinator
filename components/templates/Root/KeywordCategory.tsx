import React from 'react';
import styled from '@emotion/styled';
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
      <Textarea {...textareaProps} />
    </Wrapper>
  );
};

export const KeywordCategory: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.div({});

const Title = styled.div({});
