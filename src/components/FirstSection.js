import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  position: relative;
  transform: ${({ isShifted }) => (isShifted ? "translateY(-50%)" : "none")};
  transition: transform 0.3s ease;

  @media (min-width: 569px) {
    flex-direction: row;
    transform: ${({ isShifted }) => (isShifted ? "translateX(-50%)" : "none")};
    transition: transform 0.3s ease;
  }

  @media (max-width: 320px) {
    transform: ${({ isShifted }) => (isShifted ? "translateX(-100%)" : "none")};
    transition: transform 0.5s ease;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  @media (min-width: 569px) {
    align-items: flex-start;
    padding: 0 50px;
  }
`;

const Title = styled.h2`
  color: #030305;
  font-size: 2rem;
  font-family: OpenSans;
  font-weight: 900;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  color: #030305;
  font-size: 1.2rem;
  font-family: OpenSans-Medium;
  font-weight: 900;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Button = styled.button`
  color: #030305;
  font-size: 1rem;
  font-family: "OpenSans";
  font-weight: 900;
  margin-top: 20px;
  text-align: center;
  width: auto; // Ändere die width-Eigenschaft auf "auto"
  background-color: transparent;
  border-color: black;
  padding: 5px 15px;
  border-radius: 40px; // Hinzugefügte Abgerundete Ecken
  cursor: pointer;
  opacity: 50%;
  @media (min-width: 569px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
    width: auto;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 569px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 569px) {
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (min-width: 569px) {
    justify-content: space-between;
    align-items: flex-end;
    height: 100vh;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  animation: ${floatAnimation} 14s ease-in-out infinite;

  @media (min-width: 769px) {
    max-height: 90vh;
  }
  @media (max-width: 320px) {
    max-height: 100px;
  }
  @media (min-width: 321px) and (max-width: 375px) {
    max-height: 100%;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    max-height: unset;
  }
`;

const AdditionalImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 20vh;
  width: 490%;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const AdditionalImage = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 320px) {
    max-height: 150px;
  }
  @media (min-width: 321px) and (max-width: 375px) {
    max-height: 200px;
  }
  @media (min-width: 376px) {
    max-height: 250px;
  }
`;

const SecondSection = () => {
  const [isShifted, setShifted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const handleExpandButtonClick = () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      setDisplayText(
        "Architektur und UX-Design sind für mich wie zwei Seiten derselben Medaille. Mein Architekturstudium bereichert meine Arbeit im UX/UI-Design, indem es die Kunst der Raumgestaltung auf digitale Erlebnisse überträgt.."
      );
    } else {
      setDisplayText("");
    }
  };

  const handleBackButtonClick = () => {
    setShifted(false);
    setDisplayText("");
  };

  return (
    <>
      <Section id="section2" isShifted={isShifted}>
        <TextContainer>
          <Title>DIREN TIKIL</Title>
          <Description>
            {displayText ||
              "Mein Architekturhintergrund prägt meine Herangehensweise an UX-Design."}
          </Description>
          {/* {isExpanded ? (
            <Button onClick={handleExpandButtonClick}>x</Button>
          ) : (
            <Button onClick={handleExpandButtonClick}>mehr</Button>
          )} */}
        </TextContainer>

        <ContentContainer>
          <ImageContainer>
            <Image src="/diren.png" alt="Image" />
          </ImageContainer>
          {isShifted && (
            <>
              <InfoContainer></InfoContainer>
              <AdditionalImageContainer>
                {/* ... (additional image) */}
              </AdditionalImageContainer>
            </>
          )}
        </ContentContainer>
      </Section>
    </>
  );
};

export default SecondSection;
