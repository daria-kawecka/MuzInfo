import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const AlbumWrapper = styled.div`
  width: 175px;
  min-height: 250px;
  text-align: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.whiteWithOpacity};
  margin: 15px;
  padding: 18px;
  box-shadow: 0 11px 22px -15px ${({ theme }) => theme.color.grey};
  @media ${device.desktopL} {
    width: 260px;
    height: 360px;
    justify-content: space-evenly;
  }
`;
