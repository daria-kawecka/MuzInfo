import React from 'react';
import PropTypes from 'prop-types';
import { AlbumShape } from 'types';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { device } from 'assets/styles/devices';

const AlbumWrapper = styled.div`
  width: 175px;
  min-height: 250px;
  text-align: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.whiteWithOpacity};
  margin: 15px;
  padding: 18px;
  box-shadow: 0 11px 22px -15px ${({ theme }) => theme.color.grey};
  @media ${device.desktopL} {
    width: 260px;
    height: 360px;
    justify-content: space-evenly;
  }
`;
const AlbumImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 2%;
  box-shadow: 0 0px 25px -12px ${({ theme }) => theme.color.dark};
`;
const ArtistName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 3px;
  margin: 5px;
`;
const AlbumName = styled.p`
  margin: 5px;
  font-weight: 600;
  word-break: break-word;
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const AlbumListElement = ({ data, data: { artistName, artworkUrl100, collectionName, collectionId } }) => {
  console.log(data);
  return (
    <AlbumWrapper>
      <AlbumImage src={artworkUrl100} alt={`album-${collectionId}`} />
      <ArtistName>{artistName}</ArtistName>
      <AlbumName>{collectionName}</AlbumName>
      <Button isSmaller>Show more</Button>
    </AlbumWrapper>
  );
};

AlbumListElement.propTypes = {
  data: PropTypes.shape(AlbumShape),
};

export default AlbumListElement;
