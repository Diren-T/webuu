import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #f7f7f7;
  z-index: 10000;
  padding: 2px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  max-width: 800px; /* Anpassung der maximalen Breite des Containers */

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-family: "Arial Black", Arial, sans-serif;
  font-weight: bold;
  padding: 0.2rem 0.8rem;

  &:hover {
    color: #e0e258;
  }

  @media (max-width: 768px) {
    font-size: 12px;

    margin: 0.1rem 0rem;
  }
`;

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Nav>
      <NavLinkContainer>
        <NavLink onClick={() => scrollToSection("section2")}>DIREN</NavLink>
        <NavLink onClick={() => scrollToSection("section3")}>
          MOTIVATION
        </NavLink>
        <NavLink onClick={() => scrollToSection("section4")}>FICTION</NavLink>
        <NavLink onClick={() => scrollToSection("section5")}>KONTAKT</NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

export default Navbar;
