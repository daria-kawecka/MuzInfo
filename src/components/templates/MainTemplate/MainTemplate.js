import React from 'react';
import AppBar from 'components/molecules/AppBar/AppBar';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import AlbumList from 'components/organisms/AlbumList/AlbumList';
import styled from 'styled-components';

const AppWrapper = styled.div`
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

const MainTemplate = () => {
  return (
    <AppWrapper>
      <AppBar />
      <SearchBar />
      <AlbumList />
    </AppWrapper>
  );
};

export default MainTemplate;
