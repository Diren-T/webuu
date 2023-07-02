import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: transparent;
  z-index: 10000; // high z-index to make sure it's above everything else
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-family: "Arial Black", Arial, sans-serif;
  font-weight: bold;
  padding: 0.5rem 1rem;

  &:hover {
    color: #e0e258;
  }

  @media (max-width: 768px) {
    font-size: 10px; // smaller font size for smaller screens
    opacity: 0;
    animation: ${(props) =>
      props.isOpen &&
      css`
        ${fadeIn} 0.5s ease forwards ${props.index / 4 + 0.3}s
      `};
    display: block;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <Nav>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </MenuIcon>
      <NavLink
        isOpen={isOpen}
        index={1}
        onClick={() => scrollToSection("section2")}
      >
        What I Do
      </NavLink>
      <NavLink
        isOpen={isOpen}
        index={2}
        onClick={() => scrollToSection("section3")}
      >
        Motivation
      </NavLink>
      <NavLink
        isOpen={isOpen}
        index={3}
        onClick={() => scrollToSection("section4")}
      >
        Projects
      </NavLink>
      <NavLink
        isOpen={isOpen}
        index={4}
        onClick={() => scrollToSection("section5")}
      >
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navbar;
