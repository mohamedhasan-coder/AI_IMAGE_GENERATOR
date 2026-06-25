import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 550px;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.text_secondary + "90"};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: inherit;
  background-color: transparent;
  font-size: 16px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <SearchInput placeholder="Search AI images..." />
    </SearchBarContainer>
  );
};

export default SearchBar;