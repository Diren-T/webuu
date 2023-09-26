import Navbar from "@/components/Navbar";
import React from "react";
import styled, { keyframes } from "styled-components";

const PageWrapper = styled.div`
  background-color: #f7f7f7;
  min-height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 Spalten */
  grid-template-rows: auto auto auto; /* 3 Zeilen */
  grid-gap: 20px; /* Abstand zwischen den Grid-Elementen */
  font-family: "Open Sans", sans-serif;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr; /* 2 Spalten mit unterschiedlichen Breiten */
  }

  @media (max-width: 375px) {
    /* iPhone SE Breite */
    grid-template-columns: 1fr; /* 1 Spalte */
    grid-template-rows: auto auto auto auto; /* 4 Zeilen */
  }
`;

const ContentWrapper = styled.div`
  grid-row: 1 / 3; /* Ändere die Grid-Position für den ContentWrapper */

  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  font-family: OpenSans;
  margin-bottom: 10px;
  margin-left: 10%;

  @media (min-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 375px) {
    /* iPhone SE Breite */
    font-size: 30px;
    margin-top: 20%;
  }
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  font-size: 16px;
  padding-left: 0;
  margin-left: 10%;
  @media (max-width: 375px) {
    /* iPhone SE Breite */
    font-size: 20px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 3; /* Ändere die Grid-Position für das SVG-Container-Element */

  @media (max-width: 375px) {
    /* iPhone SE Breite */
    grid-row: auto; /* Entferne die Grid-Position für das iPhone SE */
    flex-direction: column; /* Ändere die Flexbox-Ausrichtung auf vertikal */
    margin-top: 10px; /* Füge einen oberen Abstand hinzu, um das SVG-Element unterhalb des ContentWrappers zu platzieren */
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
const SvgImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  animation: ${floatAnimation} 3s ease-in-out infinite;

  @media (max-width: 375px) {
    /* iPhone SE Breite */
    max-width: 70%; /* Ändere die maximale Breite für das iPhone SE */
    margin: 20px auto 0; /* Entferne den Margin für das iPhone SE */
  }

  @media (max-width: 768px) and (min-width: 376px) {
    /* Hier kannst du die SVG-Anpassungen für andere kleinere Bildschirme vornehmen, falls erforderlich */
    max-width: 90%;
    margin: 0 auto;
  }
`;

const Section = styled.section`
  margin: 10px auto; /* Center the section horizontally */
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column for smaller screens */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
  }
`;

const Card = styled.div`
  padding: 2em;
  margin: 10px; /* Add margin to separate cards */

  /* Adjust card styles as needed for responsiveness */

  @media (min-width: 768px) {
    width: auto; /* Adjust the width of the cards as needed for larger screens */
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  max-width: 100%;
  word-wrap: break-word;
`;

const RoutixPage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <ContentWrapper>
          <Title>routix ki Reiseplaner</Title>
          <UnorderedList>
            <ListItem>Martkforschung</ListItem>
            <ListItem>Forschung</ListItem>
            <ListItem>UI Design</ListItem>
          </UnorderedList>
        </ContentWrapper>
        <SvgContainer>
          <SvgImage src="/routix-deck.svg" alt="Your SVG Alt Text" />
        </SvgContainer>
      </PageWrapper>
      <Section>
        <CardContainer>
          <Card>
            <CardTitle>Projektüberblick</CardTitle>
            <CardDescription>
              Dieses Projekt zielt darauf ab, eine innovative, KI-basierte
              Reiseplaner-App zu entwickeln, die es Nutzern ermöglicht,
              individuelle Reiserouten basierend auf ihren Interessen und ihrem
              Zeitplan zu erstellen. Ziel ist es, den Prozess der Reiseplanung
              zu vereinfachen und gleichzeitig die Umwelt zu schonen, indem
              überflüssige Reisen vermieden werden.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Meine Rolle</CardTitle>
            <CardDescription>
              In diesem Projekt habe ich die Rolle des UX/UI-Designers. Meine
              Verantwortlichkeiten umfassen die Durchführung von Nutzer- und
              Marktanalysen, die Erstellung und Überarbeitung von Userflows und
              Informationsarchitekturen, die Entwicklung von Wireframes und
              Prototypen, due User-Testing und schließlich die Gestaltung des
              User Interface verantwortlich.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Problematik</CardTitle>
            <CardDescription>
              Im hektischen Alltag und insbesondere bei der Planung von Reisen
              kann es schwierig sein, die verfügbare Zeit optimal zu nutzen und
              gleichzeitig sicherzustellen, dass die ausgewählten Aktivitäten
              den persönlichen Interessen entsprechen. Des Weiteren kommt es
              vor, dass Nutzer ungewollt viel Zeit mit der Recherche verbringen
              und am Ende vor überwältigenden Informationen stehen, die es
              erschweren, eine effektive Entscheidung zu treffen. Hinzu kommt
              das steigende Bewusstsein für ökologische Nachhaltigkeit, das eine
              verantwortungsbewusste Planung erfordert.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Lösung</CardTitle>
            <CardDescription>
              Die Entwicklung einer KI-gesteuerten Reiseplaner-App, die eine
              personalisierte Reiseroute basierend auf den individuellen
              Interessen und dem Zeitplan des Nutzers erstellt. Die App
              analysiert verschiedene Faktoren, um eine optimierte Reiseroute
              vorzuschlagen, die die effiziente Nutzung der Zeit ermöglicht und
              überflüssiges Reisen minimiert. Zudem integriert die App
              nachhaltige Prinzipien, indem sie beispielsweise Fußwege gegenüber
              Autofahrten bevorzugt, um die CO2-Bilanz zu reduzieren.
            </CardDescription>
          </Card>
        </CardContainer>
      </Section>
    </>
  );
};

export default RoutixPage;
