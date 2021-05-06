import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grey};
  border: 0.1em solid ${({ theme }) => theme.color.lightGrey};
  outline: none;
  margin-right: 5px;

  &:focus {
    border: 0.1em solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.dark};
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.lightGrey};
  font-weight: 600;
  transition: 0.3s;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
`;

const SearchBar = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <SearchContainer>
      <StyledInput type="text" onChange={handleInputChange} placeholder="Search artists or albums" />
      <Button>Search</Button>
    </SearchContainer>
  );
};

export default SearchBar;
