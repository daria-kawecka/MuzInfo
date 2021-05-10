import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const SongName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkGrey};
  width: 80%;
  font-weight: 600;
  margin-bottom: 12px;
  padding: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGrey};
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 800;
    color: ${({ theme }) => theme.color.dark};
  }
  @media ${device.tabletL} {
    width: 65%;
  }
`;
export const AdditionalText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.grey};
  text-transform: lowercase;
  margin: 8px;
  font-style: italic;
`;
