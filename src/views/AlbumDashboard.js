import React, { useEffect } from 'react';
import AlbumInfo from 'components/organisms/AlbumInfo/AlbumInfo';
import AppBar from '../components/molecules/AppBar/AppBar';
import { GetAlbumInfo } from '../actions/albumActions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const AlbumDashboard = () => {
  const { albumID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAlbumInfo(albumID));
  }, []);
  return (
    <div>
      <AppBar />
      <AlbumInfo />
    </div>
  );
};

export default AlbumDashboard;
