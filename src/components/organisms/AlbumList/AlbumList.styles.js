import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const ListWrapper = styled.div`
  grid-area: list;
  align-self: start;
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
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkGrey};
  letter-spacing: 0.05rem;
  margin-bottom: 12px;
  @media ${device.tabletL} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;
