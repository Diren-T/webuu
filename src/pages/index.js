import React, { useState } from "react";
import { Element, Link } from "react-scroll";
import { Helmet } from "react-helmet";
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

const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  li:last-child {
    margin-right: 0;
  }

  .active {
    font-weight: bold;
  }
`;

const NavigationContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
`;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      <Header />

      <NavigationContainer>
        <Navbar>
          <ul>
            <li>
              <Link
                to="section1"
                smooth={true}
                duration={500}
                onClick={() => handlePageChange(1)}
                className={currentPage === 1 ? "active" : ""}
              >
                Section 1
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                onClick={() => handlePageChange(2)}
                className={currentPage === 2 ? "active" : ""}
              >
                Section 2
              </Link>
            </li>
            <li>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                onClick={() => handlePageChange(3)}
                className={currentPage === 3 ? "active" : ""}
              >
                Section 3
              </Link>
            </li>
            <li>
              <Link
                to="section4"
                smooth={true}
                duration={500}
                onClick={() => handlePageChange(4)}
                className={currentPage === 4 ? "active" : ""}
              >
                Section 4
              </Link>
            </li>
            <li>
              <Link
                to="section5"
                smooth={true}
                duration={500}
                onClick={() => handlePageChange(5)}
                className={currentPage === 5 ? "active" : ""}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </Navbar>
      </NavigationContainer>

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

      <FiveSection />
    </Container>
  );
};

export default HomePage;
