import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: #ffffff;
  z-index: 999; // Stelle sicher, dass die Navbar über dem restlichen Inhalt liegt
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-family: "Arial Black", Arial, sans-serif;
  font-weight: bold;
  padding: 0.5rem 1rem; // Füge hier Padding hinzu, um den Abstand zwischen den Links anzupassen

  &:hover {
    color: #e0e258;
  }
`;

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Nav>
      <NavLink onClick={() => scrollToSection("section2")}>What I Do</NavLink>
      <NavLink onClick={() => scrollToSection("section3")}>Motivation</NavLink>
      <NavLink onClick={() => scrollToSection("section4")}>Projects</NavLink>
      <NavLink onClick={() => scrollToSection("section5")}>Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
