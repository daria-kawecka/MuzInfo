import styled from 'styled-components';

export const AlbumContainer = styled.div`
  width: 70vw;
  background-color: ${({ theme }) => theme.color.whiteWithOpacity};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  padding: 18px;
  box-shadow: 0 0 22px -15px ${({ theme }) => theme.color.grey};
  text-align: center;
  cursor: default;
`;
