import React, { useState } from 'react';
//components:
import { Button } from 'components/atoms/Button/Button';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { SearchContainer, SearchIcon } from './SearchBar.styles';
//redux:
import { GetArtistInfo } from 'actions/artistActions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = () => {
    dispatch(GetArtistInfo(inputText));
    setInputText('');
  };

  return (
    <>
      <SearchContainer>
        <SearchIcon />
        <StyledInput type="text" onChange={handleInputChange} value={inputText} placeholder="Search artists or albums" />
        <Button onClick={handleClick}>Search</Button>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
