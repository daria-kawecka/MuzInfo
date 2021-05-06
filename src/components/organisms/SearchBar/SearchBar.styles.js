import styled from 'styled-components';
import { device } from 'assets/styles/devices';
import { Search } from '@styled-icons/evil/Search';

export const SearchContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 90vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  z-index: -1;
  @media ${device.tablet} {
    height: 4vh;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${device.tabletL} {
    font-size: ${({ theme }) => theme.fontSize.l};
    height: 5vh;
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 65vw;
    height: 6vh;
  }
  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 55vw;
    height: 6vh;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  bottom: 50%;
  left: 0;
  transform: translateY(50%);
  height: 85%;
  z-index: 5;
  color: ${({ theme }) => theme.color.grey};
  @media ${device.tablet} {
    left: 11%;
    height: 90%;
  }
  @media ${device.tabletL} {
    left: 11%;
  }
`;
