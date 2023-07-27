import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstSection = styled(Section)`
  background-image: url("/path/to/your/image.jpg");
  background-size: cover;
  background-position: center;
  text-align: right;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const SectionText1 = styled.p`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  text-align: right;
  font-size: 7vw;
  font-family: "OpenSans";
  font-weight: 900;
  margin-top: 10vh;
  margin-bottom: 14vh;

  @media screen and (max-width: 1024px) {
    font-size: 10vw;
    width: 80%;
    margin-top: 5vh;
    margin-bottom: 1vh;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 12vw;
    width: 90%;
    margin-top: 5vh;
    margin-bottom: 1vh;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 10vw;
    width: 95%;
    margin-top: 5vh;
    margin-bottom: vh;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    font-size: 20vw;
    width: 100%;
    margin-top: 2vh;
    margin-bottom: 1vh;
    text-align: center;
  }
`;

const SectionText2 = styled.p`
  text-align: left;
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-size: 3vw;
  font-family: "OpenSans", sans-serif;
  margin-left: 7%;
  margin-top: 0vh;

  @media screen and (max-width: 1024px) {
    font-size: 5vw;
    margin-top: 1vh;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 7vw;
    margin-top: 2vh;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 6vw;
    margin-top: 3vh;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    font-size: 11vw;
    margin-top: 1vh;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const SectionText2Subtext = styled.span`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-size: 3vw;
  font-family: "OpenSans", sans-serif;
  margin-top: 1vh;

  @media screen and (max-width: 768px) {
    font-size: 5vw;
    margin-top: 1vh;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 6vw;
    margin-top: 1vh;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    font-size: 3vw;
    margin-top: 1vh;
    align-items: center;
    text-align: center;
  }
`;

const FirstSectionComponent = () => {
  return (
    <FirstSection id="section1">
      <SectionText1>
        Mein
        <br />
        Ziel
        <br />
        ist es
      </SectionText1>
      <SectionText2>
        ansprechende <br />
        Benutzererlebnisse
        <SectionText2Subtext>
          nutzerzentriertes
          <br /> Design
        </SectionText2Subtext>
      </SectionText2>
    </FirstSection>
  );
};

export default FirstSectionComponent;
