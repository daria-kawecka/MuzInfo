import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const LoadingText = styled.p`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.l};
  @media ${device.tabletL} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
