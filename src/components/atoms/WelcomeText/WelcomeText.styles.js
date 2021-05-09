import styled, { keyframes } from 'styled-components';
import { Music } from '@styled-icons/boxicons-solid/Music';

export const WelcomeTextWrapper = styled.div`
  margin-top: 70px;
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.darkGrey};
  margin-top: 15px;
`;
const breathing = keyframes`
  0% {
    transform: rotate(10deg);

  }

  50% {
    transform: rotate(-15deg)

  }
  
  100% {
    transform: rotate(20deg)

  }
`;
export const MusicIcon = styled(Music)`
  height: 18vh;
  color: ${({ theme }) => theme.color.blue};
  animation: ${breathing} 0.8s infinite forwards alternate-reverse;
`;
