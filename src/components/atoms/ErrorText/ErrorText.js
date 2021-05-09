import React from 'react';
import { ErrorWrapper, ErrorIcon, StyledError } from './ErrorText.styles';

const ErrorText = () => {
  return (
    <ErrorWrapper>
      <ErrorIcon />
      <StyledError>Oops... something went wrong!</StyledError>
    </ErrorWrapper>
  );
};

export default ErrorText;
