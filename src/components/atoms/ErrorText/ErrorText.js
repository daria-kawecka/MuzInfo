import React from 'react';
//prop-types:
import PropTypes from 'prop-types';
//components:
import { ErrorWrapper, ErrorIcon, StyledError } from './ErrorText.styles';

const ErrorText = ({ text, haveSmallMargin }) => {
  return (
    <ErrorWrapper haveSmallMargin={haveSmallMargin}>
      <ErrorIcon />
      <StyledError>{text}</StyledError>
    </ErrorWrapper>
  );
};
ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
  haveSmallMargin: PropTypes.bool,
};
export default ErrorText;
