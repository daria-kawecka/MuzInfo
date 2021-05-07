import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AlbumListElement from 'components/molecules/AlbumListElement/AlbumListElement';
const ListWrapper = styled.div`
  grid-area: list;
  align-self: center;
  justify-self: center;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
          <p>Search results for {List.data[0][0].artistName}</p>
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
