import React from 'react';
import { useHistory } from 'react-router-dom';
//redux:
import { useSelector } from 'react-redux';
//components:
import { AlbumContainer } from 'components/molecules/AlbumContainer/AlbumContainer';
import SongList from 'components/molecules/SongList/SongList';
import { AlbumImage } from 'components/atoms/AlbumImage/AlbumImage';
import { BackIcon } from './AlbumInfo.styles';
import ErrorText from 'components/atoms/ErrorText/ErrorText';
import LoadingText from 'components/atoms/LoadingText/LoadingText';

const AlbumInfo = () => {
  const AlbumData = useSelector((store) => store.albumInfo);
  const history = useHistory();
  const ShowData = () => {
    console.log(AlbumData);
    if ((AlbumData.data[0] && !AlbumData.data[0].length) || AlbumData.errorMsg) {
      return <ErrorText />;
    }
    if (AlbumData.loading) {
      return <LoadingText />;
    }
    if (AlbumData.data[0]) {
      console.log(AlbumData.data[0][0].artworkUrl100);
      return (
        <AlbumContainer>
          <AlbumImage src={AlbumData.data[0][0].artworkUrl100} />
          <SongList data={AlbumData.data[0]} />
        </AlbumContainer>
      );
    }
  };
  const handleBack = () => {
    history.goBack();
  };
  return (
    <>
      <BackIcon onClick={handleBack} />
      {ShowData()}
    </>
  );
};

export default AlbumInfo;
