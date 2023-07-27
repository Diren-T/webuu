import React, { useState } from "react";
import styled from "styled-components";

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
    transition: transform 0.3s ease; /* Standard-Transition für Desktop-Ansicht */
  }

  @media (max-width: 320px) {
    transform: ${({ isShifted }) => (isShifted ? "translateX(-100%)" : "none")};
    transition: transform 0.5s ease; /* Translatex-Transition für iPhone SE */
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 569px) {
    align-items: flex-start;
  }
`;

const Button = styled.button`
  color: #000;
  font-family: "OpenSans-Medium'", sans-serif;
  font-size: 1.2rem; /* Standard-Schriftgröße */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;

  @media (max-width: 320px) {
    font-size: 0.1rem; /* Schriftgröße für das iPhone SE */
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Änderung: Höhe auf 100vh setzen */
  @media (min-width: 569px) {
    justify-content: space-between;
    align-items: flex-end;
    height: 100vh;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 769px) {
    max-height: 90vh;
  }
  @media (max-width: 320px) {
    max-height: 100px; /* Reduzierte Bildgröße für das iPhone SE */
  }
  @media (min-width: 321px) and (max-width: 375px) {
    max-height: 100%; /* Bildgröße für andere mobile Geräte */
  }
  @media (min-width: 376px) and (max-width: 768px) {
    max-height: unset; /* Bildgröße für Tablets und kleinere Desktops */
  }
`;

const BackButton = styled(Button)`
  position: absolute;
  bottom: -70px;
  transform: translateX(-10%);

  @media (min-width: 569px) {
    bottom: auto;
    left: -70px;
    transform: none;
  }
`;

const AdditionalText = styled.div`
  color: #030305;
  font-size: 1.2rem;
  font-family: "OpenSans", sans-serif;
  font-weight: 900;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  @media (min-width: 569px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
    width: 50%;
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
        {isShifted && (
          <BackButton onClick={handleBackButtonClick}>
            {"\u2190"}Zurück
          </BackButton>
        )}
        <ContentContainer>
          <ImageContainer>
            <Image src="/diren.png" alt="Image" />
          </ImageContainer>
          {isShifted && (
            <>
              <InfoContainer>
                <AdditionalText>{displayText}</AdditionalText>
              </InfoContainer>
              <AdditionalImageContainer>
                <AdditionalImage src="/duft.png" alt="New Image" />
              </AdditionalImageContainer>
            </>
          )}
        </ContentContainer>
      </Section>
    </>
  );
};

export default SecondSection;
