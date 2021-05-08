import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
export const BackIcon = styled(ArrowBack)`
  width: 60px;
  margin: 10px;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.whiteWithOpacity};
  border-radius: 15px;
  box-shadow: 0 0 22px -15px ${({ theme }) => theme.color.dark};
  padding: 12px;
  transition: 0.4s;
  :hover {
    color: ${({ theme }) => theme.color.darkBlue};
    background-color: ${({ theme }) => theme.color.white};
  }
`;
