import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MainSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto; /* Oberer und unterer Abstand auf "auto" setzen */
  grid-row-gap: 10px; /* Vertikaler Abstand zwischen den Cards anpassen */
  grid-column-gap: 30px; /* Horizontaler Abstand zwischen den Cards anpassen */
  padding: 50px;

  @media (min-width: 1024px) {
    /* Bei Bildschirmbreiten ab 1024px */
    padding-left: 10%; /* Linken Abstand hinzufügen */
    padding-right: 10%; /* Rechten Abstand hinzufügen */
  }

  @media (max-width: 1350px) {
    /* Bei Bildschirmbreiten unter 1170px */
    grid-template-columns: 1fr; /* Ändert das Grid auf zwei gleichgroße Spalten */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto; /* Oberer und unterer Abstand auf "auto" setzen */
    grid-row-gap: 10px; /* Vertikaler Abstand zwischen den Cards anpassen */
    grid-column-gap: 0; /* Horizontaler Abstand bei schmaleren Bildschirmen anpassen */
    padding-left: 0; /* Linken Abstand bei schmaleren Bildschirmen entfernen */
    padding-right: 0; /* Rechten Abstand bei schmaleren Bildschirmen entfernen */
  }
`;

const Card = styled.div`
  margin-top: auto; /* Zentriert die Card vertikal im Grid-Container */
  background-color: #fff;
  padding: 10px;
  flex: 1; /* Füllt den verfügbaren Platz in der Spalte aus */

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%; /* Verwenden Sie die volle Breite der Spalte */

  @media (min-width: 1170px) {
    /* Bei Bildschirmbreiten ab 1170px */
    flex: 2; /* Vergrößert die Karte proportional bei großen Bildschirmen */
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.a`
  color: #007bff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 400px; /* Erhöhen Sie den Abstand nach Bedarf */

  /* Fügt den Pfeil nach "Weitere Infos" hinzu */
  &::after {
    content: " > ";
  }
`;

const SVGIcon = styled.img`
  width: 420px; /* Erhöhen Sie die Breite nach Bedarf */
  height: auto; /* Auto, um das Seitenverhältnis beizubehalten */
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
`;

const FirstCard = styled(Card)`
  background-color: #e5e5e5;
  position: relative; /* Position relativ setzen, um das SVG innerhalb dieser Karte zu positionieren */
`;
const FirstCardSVGIcon = styled(SVGIcon)`
  width: 550px; /* Erhöhen Sie die Breite nach Bedarf */
  height: auto; /* Auto, um das Seitenverhältnis beizubehalten */
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
`;

const SecondCard = styled(Card)`
  background-color: #192b2d;
  color: #ffffff;
`;

const FourthSection = () => {
  return (
    <MainSection id="section4">
      <FirstCard>
        <Title>routix</Title>
        <Description>Reisen Next Level..</Description>
        <Button href="/routix">Weitere Infos </Button>
        <FirstCardSVGIcon src="routix-pro.svg" alt="Link Icon" />
      </FirstCard>
      <SecondCard>
        <Title>GreenVille Gardens</Title>
        <Description>Nachbarschaft vernetzt, Natur revitalisiert.</Description>
        <Button href="#">Weitere Infos</Button>
        <SVGIcon src="GreenVille-pro.svg" alt="Link Icon" />
      </SecondCard>
      <FirstCard>
        <Title>routix</Title>
        <Description>Reisen Next Level..</Description>
        <Button href="#">Weitere Infos</Button>
        <FirstCardSVGIcon src="routix-pro.svg" alt="Link Icon" />
      </FirstCard>
      <SecondCard>
        <Title>GreenVille Gardens</Title>
        <Description>Nachbarschaft vernetzt, Natur revitalisiert.</Description>
        <Button href="#">Weitere Infos</Button>
        <SVGIcon src="GreenVille-pro.svg" alt="Link Icon" />
      </SecondCard>
    </MainSection>
  );
};

export default FourthSection;
