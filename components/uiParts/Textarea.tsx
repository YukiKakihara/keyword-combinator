import React from 'react';
import styled from '@emotion/styled';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Component: React.VFC<Props> = (props) => {
  return <Wrapper {...props} />;
};

export const Textarea: React.VFC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.textarea({});
