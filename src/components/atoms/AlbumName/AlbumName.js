import styled from 'styled-components';

export const AlbumName = styled.p`
  margin: 5px;
  font-weight: 600;
  word-break: break-word;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
