import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstSection = styled(Section)`
  /* Gemeinsame Hintergrundstile für die erste und zweite Section */
  background-image: url("/path/to/your/image.jpg");
  background-size: cover;
  background-position: center;
  text-align: right;
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
  font-family: Arial Black;
  font-weight: 900;
  margin-top: 10vh;
  margin-bottom: 14vh; /* Hier den gewünschten Abstand zwischen den Absätzen anpassen */

  @media screen and (max-width: 768px) {
    font-size: 10vw;
    width: 80%;
    margin-top: 5vh;
    margin-bottom: 1vh; /* Hier den gewünschten Abstand zwischen den Absätzen anpassen */
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
  font-family: Arial Black;
  margin-left: 7%;
  margin-top: 0vh;

  @media screen and (max-width: 768px) {
    font-size: 5vw;
    margin-top: 1vh;
  }
`;

const SectionText2Subtext = styled.span`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-size: 3vw;
  font-family: Arial Black;
  margin-top: 1vh;

  @media screen and (max-width: 768px) {
    font-size: 5vw;
    margin-top: 1vh;
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
