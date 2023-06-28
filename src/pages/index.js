import React from "react";
import { Element, Link } from "react-scroll";
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import styled from "styled-components";
import FiveSection from "@/components/FiveSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Element name="section1">
        <FirstSection />
      </Element>
      <Element name="section2">
        <SecondSection />
      </Element>
      <Element name="section3">
        <ThirdSection />
      </Element>
      <Element name="section4">
        <FourthSection />
      </Element>
      <Element name="section5">
        <FiveSection />
      </Element>

      <nav>
        <ul>
          <li>
            <Link to="section1" smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Section 3
            </Link>
          </li>
          <li>
            <Link to="section4" smooth={true} duration={500}>
              Section 4
            </Link>
          </li>
          <li>
            <Link to="section5" smooth={true} duration={500}>
              Section 5
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default HomePage;
