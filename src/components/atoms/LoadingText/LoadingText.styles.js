import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
  cursor: default;
`;

export const LoadingText = styled.p`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.l};
  @media ${device.tabletL} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
