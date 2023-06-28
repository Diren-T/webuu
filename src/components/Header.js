import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 1rem;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
