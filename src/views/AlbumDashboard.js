import React, { useEffect } from 'react';
import AlbumInfo from 'components/organisms/AlbumInfo/AlbumInfo';
import AppBar from 'components/molecules/AppBar/AppBar';
import { GetAlbumInfo } from 'actions/albumActions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const AlbumDashboard = () => {
  const { albumID } = useParams();
  console.log(albumID);
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
