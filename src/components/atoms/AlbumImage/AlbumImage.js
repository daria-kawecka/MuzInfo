import styled from 'styled-components';

export const AlbumImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 2%;
  box-shadow: 0 0 25px -12px ${({ theme }) => theme.color.dark};
`;
