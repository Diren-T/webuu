import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  transform: ${({ isShifted }) => (isShifted ? "translateX(-50%)" : "none")};
  transition: transform 0.3s ease;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  @media (max-width: 768px) {
    align-items: center;
    padding: 0 10px;
  }
`;

const Title = styled.h2`
  color: #030305;
  font-size: 2rem;
  font-family: Arial Black;
  font-weight: 900;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  color: #030305;
  font-size: 1.2rem;
  font-family: Arial;
  font-weight: 900;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Button = styled.button`
  color: #000;
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between; // legt den Raum zwischen den Elementen fest
  align-items: flex-start; // zentriert die Elemente vertikal
  margin-top: auto;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column; // stellt die Elemente untereinander auf kleineren Bildschirmen dar
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 769px) {
    max-height: 90vh;
  }
`;

const BackButton = styled(Button)`
  position: absolute;
  bottom: -80px;
  right: 10px;
`;

const AdditionalText = styled.div`
  color: #030305;
  font-size: 1.2rem;
  font-family: Arial;
  font-weight: 900;
  margin-left: 20px;
  width: 70%;
  position: relative; // Hinzufügen dieser Zeile
  @media (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }
`;

const SecondSection = () => {
  const [isShifted, setShifted] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = (text) => {
    setShifted(true);
    setDisplayText(text);
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
            Ich bin UX/UI-Designer, der seine Leidenschaft für Architektur und
            Malerei in die Gestaltung beeindruckender digitaler Erlebnisse
            einfließen lässt. Mein Hintergrund in Architektur verleiht meinen
            UX-Designs ein tiefes Verständnis für Proportionen, Rhythmus und
            Nutzerfluss. Gleichzeitig bereichert mich die Malerei mit kreativer
            Ausdrucksstärke und ästhetischem Empfinden. Ich freue mich darauf,
            durch mein vielseitiges Hintergrundwissen ansprechende
            Benutzererlebnisse zu schaffen.
          </Description>
          <ButtonContainer>
            <Button
              onClick={() =>
                handleButtonClick(
                  "Mein Architekturhintergrund prägt meine Herangehensweise an UX-Design. Ähnlich wie ein Architekt den Raum für das Leben gestaltet, gestalte ich digitale Benutzeroberflächen, die den Nutzern einen intuitiven und ansprechenden Raum bieten. Das Verständnis von Proportionen, Rhythmus und Nutzerfluss, das ich aus der Architektur gewinne, fließt in meine UX-Designs ein, um effektive und ansprechende Lösungen zu entwickeln."
                )
              }
            >
              Architektur und UX {"\u2192"}
            </Button>
            <Button
              onClick={() =>
                handleButtonClick(
                  "Meine Leidenschaft für die Malerei bereichert mein UX-Design mit kreativer Ausdrucksstärke. Wie ein Künstler Farben, Komposition und visuelle Elemente einsetzt, nutze ich dieses Wissen, um ästhetische und ansprechende Benutzererlebnisse zu schaffen. Die Malerei inspiriert mich, innovative Designs zu entwickeln, die Emotionen wecken und eine starke visuelle Anziehungskraft haben. Durch die Verbindung von Malerei und UX-Design schaffe ich einzigartige und fesselnde digitale Erlebnisse."
                )
              }
            >
              Kunst und UX {"\u2192"}
            </Button>
          </ButtonContainer>
        </TextContainer>
        <ImageContainer>
          <Image src="/diren.png" alt="Image" />
          {isShifted && (
            <AdditionalText>
              {displayText}
              <BackButton onClick={handleBackButtonClick}>
                {" "}
                {"\u2190"}Zurück
              </BackButton>
            </AdditionalText>
          )}
        </ImageContainer>
      </Section>
    </>
  );
};

export default SecondSection;
