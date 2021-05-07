import styled from 'styled-components';

export const ArtistName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 3px;
  margin: 5px;
`;
export const AlbumName = styled.p`
  margin: 5px;
  font-weight: 600;
  word-break: break-word;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
