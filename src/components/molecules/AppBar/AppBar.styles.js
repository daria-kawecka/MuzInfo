import styled from 'styled-components';
import { Musicbrainz } from '@styled-icons/simple-icons/Musicbrainz';

export const LogoWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
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
`;

export const AppHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 400;
  color: ${({ theme }) => theme.color.dark};
  span {
    color: ${({ theme }) => theme.color.darkBlue};
    font-weight: 600;
  }
`;
