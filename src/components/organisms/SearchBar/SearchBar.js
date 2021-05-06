import React, { useState } from 'react';
//components:
import { Button } from 'components/atoms/Button/Button';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { SearchContainer, SearchIcon } from './SearchBar.styles';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <StyledInput type="text" onChange={handleInputChange} placeholder="Search artists or albums" />
      <Button>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
