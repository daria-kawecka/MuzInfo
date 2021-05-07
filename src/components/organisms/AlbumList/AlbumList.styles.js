import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const ListWrapper = styled.div`
  grid-area: list;
  align-self: center;
  justify-self: center;
  text-align: center;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    width: 90vw;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const SearchInfoText = styled.p`
  width: 100%;
`;
