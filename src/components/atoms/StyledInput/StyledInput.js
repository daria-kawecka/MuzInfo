import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const StyledInput = styled.input`
  border-radius: 8px;
  padding: 7px 15px 7px 10%;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grey};
  border: 0.1em solid ${({ theme }) => theme.color.lightGrey};
  outline: none;
  margin-right: 5px;
  width: 90%;
  &:focus {
    border: 0.1em solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.dark};
  }
  @media ${device.mobileLand} {
    padding: 7px 20px 7px 6%;
  }
  @media ${device.tablet} {
    width: 65%;
    padding-left: 6%;
  }
  @media ${device.tabletL} {
    padding: 10px 10px 10px 8%;
  }
`;
