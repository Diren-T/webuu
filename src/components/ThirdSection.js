import React from "react";
import styled from "styled-components";
import { useVibrate } from "react-use"; // importieren Sie useVibrate von react-use

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030305;
  background-attachment: fixed;
  overflow: auto; // Fügt Scrollbars hinzu, wenn der Inhalt zu groß ist
  position: relative;
`;

const SquaresBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Square = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  animation: squareAnimation 1.5s infinite;
  opacity: 0; /* Füge diese Zeile hinzu */

  @keyframes squareAnimation {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px; // Hier wurde die Eigenschaft hinzugefügt
  max-width: 1200px;
  padding: 20px;
  position: relative;
`;

const Description = styled.p`
  opacity: 0;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  font-family: Arial Black;
  transition: all 0.3s ease; // Hinzufügen der Transitionseigenschaft
  transform: translateY(10px); // Hinzufügen der Transform-Eigenschaft
`;

const ContentItem = styled.div`
  background-color: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  width: 100%; // Änderung hier, für mobile Ansicht
  margin-bottom: 20px;

  &:hover {
    .title-container {
      justify-content: flex-start;
    }

    ${Description} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    width: 50%; // Änderung hier, für Tablet-Ansicht
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    width: 24%; // Änderung hier, für Desktop-Ansicht
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-family: Arial Black;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 121%;
  color: transparent;
  -webkit-text-stroke: 2px white;
  margin-left: 10px;
  align-self: flex-start;
  transition: all 0.3s ease; /* Hinzufügen der Transitionseigenschaft */

  &:hover {
    transform: skewX(-20deg); /* Verzerren des Titels mit einer Neigung */
  }
`;

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomSquares = () => {
  const squares = [];
  const numberOfSquares = 100; // Anzahl der zu generierenden Quadrate

  for (let i = 0; i < numberOfSquares; i++) {
    const randomTop = generateRandomNumber(0, 100);
    const randomLeft = generateRandomNumber(0, 100);
    const randomDelay = generateRandomNumber(0, 2000);
    const randomDuration = generateRandomNumber(2000, 4000);

    squares.push(
      <Square
        key={i}
        style={{
          top: `${randomTop}%`,
          left: `${randomLeft}%`,
          animationDelay: `${randomDelay}ms`,
          animationDuration: `${randomDuration}ms`,
        }}
      />
    );
  }

  return squares;
};

const ThirdSection = () => {
  const squares = generateRandomSquares();

  return (
    <Section id="section3">
      <SquaresBackground>{squares}</SquaresBackground>
      <ContentContainer>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title>REVOLUTION</Title>
          </TitleContainer>
          <Description>
            Verändere das Nutzerleben mit bahnbrechenden Erlebnissen
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title>LEIDENSCHAFT</Title>
          </TitleContainer>
          <Description>
            Glaube an die Leidenschaft des Designs, um den Alltag zu inspirieren
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title>BEGEISTERUNG</Title>
          </TitleContainer>
          <Description>
            Spüre den Funken, wenn unsere Designs das Leben der Nutzer aufblühen
            lassen
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title>INNOVATION</Title>
          </TitleContainer>
          <Description>
            Setze neue Maßstäbe und erweitere die Grenzen des Designs mit
            kreativem Schwung
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title>VIELFALT</Title>
          </TitleContainer>
          <Description>
            Schaffe einzigartige Erlebnisse für eine vielfältige Nutzerschaft
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title>PERFEKTION</Title>
          </TitleContainer>
          <Description>
            Streben nach der perfekten Fusion aus Funktionalität, Eleganz und
            Emotion
          </Description>
        </ContentItem>
      </ContentContainer>
    </Section>
  );
};

export default ThirdSection;
