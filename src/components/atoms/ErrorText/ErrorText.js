import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorIcon, StyledError } from './ErrorText.styles';

const ErrorText = ({ text }) => {
  return (
    <ErrorWrapper>
      <ErrorIcon />
      <StyledError>{text}</StyledError>
    </ErrorWrapper>
  );
};
ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ErrorText;
