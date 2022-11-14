import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Button, Input, Select } from "semantic-ui-react";
import styled from "styled-components";

const options = [
  { key: "all", text: "All", value: "all" },
  { key: "articles", text: "Articles", value: "articles" },
  { key: "products", text: "Products", value: "products" },
];

const Searchbar = () => {
  return (
    <SearchWrapper>
      <InputWrapper type="text" placeholder="Search..." />
      <SearchButtonWrapper>
        <HiOutlineSearch />
      </SearchButtonWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  button {
    margin-left: 10px;
  }
`;

const InputWrapper = styled.input`
  width: 90%;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 20px;
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  transition: all ease-in-out 0.3s;
`;

const MicWrapper = styled.div`
  width: 5%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SearchButtonWrapper = styled.div`
  width: 5%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default Searchbar;
