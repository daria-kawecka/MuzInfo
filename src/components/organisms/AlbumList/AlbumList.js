import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AlbumListElement from 'components/molecules/AlbumListElement/AlbumListElement';
import ErrorText from 'components/atoms/ErrorText/ErrorText';
import { SearchInfoText, ListWrapper } from './AlbumList.styles';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import WelcomeText from '../../atoms/WelcomeText/WelcomeText.';

const AlbumList = () => {
  const List = useSelector((store) => store.artistInfo);

  useEffect(() => {
    ShowData();
  }, [List]);

  const ShowData = () => {
    console.log(List);
    if ((List.data[0] && !List.data[0].length) || List.errorMsg) {
      return <ErrorText text={'Oops... something went wrong!'} />;
    }
    if (List.loading) {
      return <LoadingText />;
    }
    if (!List.data.length) {
      return <WelcomeText />;
    }
    if (List.data[0]) {
      return (
        <>
          <SearchInfoText>
            Search results for <span>{List.term}</span>
          </SearchInfoText>
          {List.data[0].map((el, index) => {
            return <AlbumListElement data={el} key={index} />;
          })}
        </>
      );
    }
  };
  return <ListWrapper>{List.data && ShowData()}</ListWrapper>;
};

export default AlbumList;
