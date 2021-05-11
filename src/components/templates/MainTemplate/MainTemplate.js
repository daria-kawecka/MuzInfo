import React from 'react';
import AppBar from 'components/molecules/AppBar/AppBar';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import AlbumList from 'components/organisms/AlbumList/AlbumList';
import { AppWrapper } from './MainTemplate.styles';

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
