import React, { useEffect } from 'react';
//react-router:
import { useParams } from 'react-router-dom';
//redux:
import { GetAlbumInfo } from 'actions/albumActions';
import { useDispatch } from 'react-redux';
//components:
import AlbumInfo from 'components/organisms/AlbumInfo/AlbumInfo';
import AppBar from 'components/molecules/AppBar/AppBar';

const AlbumDashboard = () => {
  const { albumID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAlbumInfo(albumID));
  }, []);
  return (
    <>
      <AppBar />
      <AlbumInfo />
    </>
  );
};

export default AlbumDashboard;
