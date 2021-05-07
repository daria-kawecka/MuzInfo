import styled from 'styled-components';
import { device } from 'assets/styles/devices';

export const Button = styled.button`
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.lightGrey};
  font-weight: 600;
  transition: 0.3s;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
  &:disabled {
    opacity: 30%;
    background-color: ${({ theme }) => theme.color.dark};
    cursor: default;
  }
  @media ${device.tablet} {
    padding: 10px 20px;
  }
  @media ${device.tabletL} {
    padding: 10px 35px;
  }
`;
