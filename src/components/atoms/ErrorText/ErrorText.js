import React from 'react';
import styled from 'styled-components';
import { device } from 'assets/styles/devices';
import { ErrorCircle } from '@styled-icons/boxicons-regular/ErrorCircle';
import { keyframes } from 'styled-components';
const StyledError = styled.p`
  justify-self: flex-start;
  color: ${({ theme }) => theme.color.warning};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${device.tabletL} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
const errorShow = keyframes`
  0% {
    transform: translateX(-5px);

  }
  30% {
    transform: translateX(5px);

  }
  50% {
    transform: translateX(-5px);

  }
  70% {
    transform: translateX(7px);

  }
  90% {
    transform: translateX(-7px);

  }
  91% {
    transform: translateX(3px);

  }
  94% {
    transform: translateX(-2px);

  }
  100% {
    transform: translateX(0px);

  }
`;
const ErrorIcon = styled(ErrorCircle)`
  width: 30%;
  color: ${({ theme }) => theme.color.warning};
  animation: ${errorShow} 0.4s;
  margin-right: 15px;
  @media ${device.mobileLand} {
    width: 15%;
  }
  @media ${device.mobileL} {
    width: 13%;
  }
  @media ${device.desktop} {
    width: 8%;
  }
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
`;
const ErrorText = () => {
  return (
    <ErrorWrapper>
      <ErrorIcon />
      <StyledError>Oops... something went wrong!</StyledError>
    </ErrorWrapper>
  );
};

export default ErrorText;
