import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AlbumListElement from 'components/molecules/AlbumListElement/AlbumListElement';
import ErrorText from 'components/atoms/ErrorText/ErrorText';
import { SearchInfoText, ListWrapper } from './AlbumList.styles';

const AlbumList = () => {
  const List = useSelector((store) => store.artistInfo);

  useEffect(() => {
    ShowData();
  }, [List]);

  const ShowData = () => {
    console.log(List);
    if ((List.data[0] && !List.data[0].length) || List.errorMsg) {
      return <ErrorText />;
    }
    if (List.loading) {
      return <p>Loading...</p>;
    }
    if (!List.data.length) {
      return <p>Search something!!!</p>;
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
