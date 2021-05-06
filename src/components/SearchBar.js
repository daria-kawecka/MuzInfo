import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/evil/Search';
import { device } from 'assets/styles/devices';

const SearchContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 90vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  z-index: -1;
  @media ${device.tablet} {
    height: 4vh;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${device.tabletL} {
    font-size: ${({ theme }) => theme.fontSize.l};
    height: 5vh;
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 65vw;
    height: 6vh;
  }
  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 55vw;
    height: 6vh;
  }
`;

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 7px 15px 7px 10%;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grey};
  border: 0.1em solid ${({ theme }) => theme.color.lightGrey};
  outline: none;
  margin-right: 5px;
  width: 90%;
  &:focus {
    border: 0.1em solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.dark};
  }
  @media ${device.mobileLand} {
    padding: 7px 20px 7px 6%;
  }
  @media ${device.tablet} {
    width: 65%;
    padding-left: 6%;
  }
  @media ${device.tabletL} {
    padding: 10px 10px 10px 8%;
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
  @media ${device.tablet} {
    padding: 10px 20px;
  }
  @media ${device.tabletL} {
    padding: 10px 35px;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  bottom: 50%;
  left: 0;
  transform: translateY(50%);
  height: 85%;
  z-index: 5;
  color: ${({ theme }) => theme.color.grey};
  @media ${device.tablet} {
    left: 11%;
    height: 90%;
  }
  @media ${device.tabletL} {
    left: 11%;
  }
`;
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
