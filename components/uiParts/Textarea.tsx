import React from 'react';
import styled from '@emotion/styled';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Component: React.FC<Props> = (props) => {
  return <Wrapper {...props} />;
};

export const Textarea: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

const Wrapper = styled.textarea({});
