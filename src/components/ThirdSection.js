import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030305;
  background-attachment: fixed;
  overflow: hidden;
  position: relative;
`;

const SquaresBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Square = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: white;
  animation: squareAnimation 1.5s infinite;
  opacity: 0;

  &.glow {
    box-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white;
  }

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
  gap: 50px;
  max-width: 1000px; /* Beispiel: Breite reduzieren */
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const Description = styled.p`
  opacity: 0;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  font-family: OpenSans;
  transition: all 0.3s ease;
  transform: translateY(10px);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
  width: 100%;
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
    width: 50%;
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    width: 24%;
  }

  @media (max-width: 500px) {
    /* Anpassung für iPhone SE */
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  &:hover {
    .title {
      color: white;
      -webkit-text-stroke-color: white;
    }
  }
`;

const Title = styled.h3`
  font-family: OpenSans;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 121%;
  color: transparent;
  -webkit-text-stroke: 2px white;
  margin-left: 10px;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: skewX(-20deg);
  }
`;

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomSquares = () => {
  const squares = [];
  const numberOfSquares = 900;

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
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  const squares = generateRandomSquares();

  return (
    <Section id="section3">
      <SquaresBackground>{clientSide && squares}</SquaresBackground>
      <ContentContainer>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title className="title">REVOLUTION</Title>
          </TitleContainer>
          <Description>
            Verändere das Nutzerleben mit bahnbrechenden Erlebnissen
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title className="title">LEIDENSCHAFT</Title>
          </TitleContainer>
          <Description>
            Glaube an die Leidenschaft des Designs, um den Alltag zu inspirieren
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title className="title">BEGEISTERUNG</Title>
          </TitleContainer>
          <Description>
            Spüre den Funken, wenn unsere Designs das Leben der Nutzer aufblühen
            lassen
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title className="title">INNOVATION</Title>
          </TitleContainer>
          <Description>
            Setze neue Maßstäbe und erweitere die Grenzen des Designs mit
            kreativem Schwung
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title className="title">VIELFALT</Title>
          </TitleContainer>
          <Description>
            Schaffe einzigartige Erlebnisse für eine vielfältige Nutzerschaft
          </Description>
        </ContentItem>
        <ContentItem>
          <TitleContainer className="title-container">
            <Title className="title">PERFEKTION</Title>
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
