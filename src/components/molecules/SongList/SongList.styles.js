import styled from 'styled-components';

export const SongName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 600;
  margin-top: 10px;
`;
export const AdditionalText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.grey};
  text-transform: lowercase;
  margin: 8px;
  font-style: italic;
`;
