import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AlbumListElement from 'components/molecules/AlbumListElement/AlbumListElement';
import ErrorText from 'components/atoms/ErrorText/ErrorText';
import { SearchInfoText, ListWrapper, ButtonWrapper } from './AlbumList.styles';
import { Button } from 'components/atoms/Button/Button';
import LoadingText from 'components/atoms/LoadingText/LoadingText';
import WelcomeText from 'components/atoms/WelcomeText/WelcomeText.';

const AlbumList = () => {
  const [index, setIndex] = useState(10);
  const List = useSelector((store) => store.artistInfo);

  useEffect(() => {
    ShowData();
    setIndex(10);
  }, [List]);
  const handleClick = () => {
    setIndex((prev) => prev + 5);
  };
  const ShowData = () => {
    // console.log(List);
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
          {List.data[0].slice(0, index).map((el, index) => {
            return <AlbumListElement data={el} key={index} />;
          })}
          <ButtonWrapper>{index < List.data[0].length && <Button onClick={handleClick}>Show 5 more</Button>}:</ButtonWrapper>
        </>
      );
    }
  };
  return <ListWrapper>{List.data && ShowData()}</ListWrapper>;
};

export default AlbumList;
