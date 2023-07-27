import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 0;
  z-index: 10;
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
