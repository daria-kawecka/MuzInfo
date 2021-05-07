import styled from 'styled-components';
import { Musicbrainz } from '@styled-icons/simple-icons/Musicbrainz';
import { device } from 'assets/styles/devices';

export const LogoWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  @media ${device.mobileLand} {
    width: 22%;
    padding: 3px;
  }
  @media ${device.tablet} {
    width: 35%;
  }

  @media ${device.tabletL} {
    width: 30%;
  }
  @media ${device.desktop} {
    width: 23%;
  }
  @media ${device.desktopL} {
    width: 15%;
  }
`;

export const Logo = styled(Musicbrainz)`
  height: 100%;
  margin-left: 5%;
  color: ${({ theme }) => theme.color.dark};
`;

export const Appbar = styled.nav`
  height: 8vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 18px 0 ${({ theme }) => theme.color.lightGrey};
  grid-area: nav;
`;

export const AppHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 400;
  color: ${({ theme }) => theme.color.dark};
  span {
    color: ${({ theme }) => theme.color.blue};
    font-weight: 600;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
`;
