import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AlbumListElement from 'components/molecules/AlbumListElement/AlbumListElement';
import styled from 'styled-components';
import { device } from 'assets/styles/devices';
const ListWrapper = styled.div`
  grid-area: list;
  align-self: center;
  justify-self: center;
  text-align: center;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    width: 90vw;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const SearchInfoText = styled.p`
  width: 100%;
`;
const AlbumList = () => {
  const List = useSelector((store) => store.artistInfo);

  useEffect(() => {
    ShowData();
  }, [List]);

  const ShowData = () => {
    console.log(List.data.length);
    if ((List.data[0] && !List.data[0].length) || List.errorMsg) {
      return <p>Oops... something went wrong! </p>;
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
          <SearchInfoText>Search results for {List.data[0][0].artistName}</SearchInfoText>
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
