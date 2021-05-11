import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 10% 2fr;
  gap: 15px 0;
  grid-template-areas:
    'nav'
    'search'
    'list';
`;
