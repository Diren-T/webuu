import React, { useState } from "react";
import styled from "styled-components";

const MainSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentSection = styled.section`
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: transform 0.5s ease;
  transform: translateX(-${(props) => props.currentPage * 100}%);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 60px;

  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 20px;
  }
`;

const PreviousButton = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-right: 20px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const NextButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const PageContent = styled.article`
  width: ${(props) => (props.currentPage ? "100%" : "0")};
  display: ${(props) => (props.currentPage ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  transition: width 0.5s ease;
`;

const ColumnContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 0px;
  }
  @media screen and (min-width: 320px) {
    grid-gap: 20px;
  }
`;

const Title = styled.h1`
  font-family: "Arial Black", sans-serif;
  text-align: left;
  font-size: 5em;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 320px) {
    font-size: 1.2em;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 6em;
    margin-bottom: 20px;
    margin-left: -50px;
  }
`;

const SubTitle = styled.h2`
  font-family: "Arial Black", sans-serif;
  text-align: left;
  font-size: 1em;
  margin-bottom: 3px;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
    margin-bottom: 10px;
    margin-left: -30px;
  }
  @media screen and (min-width: 320px) {
    font-size: 0.5em;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const TextField = styled.p`
  font-family: "Arial Regular", sans-serif;
  text-align: left;
  margin-bottom: 20px;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    max-width: 300px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.2em;
    margin-left: -30px;
  }
  @media screen and (min-width: 320px) {
    font-size: 1em;
    margin-left: 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 80px;
    margin-left: -50px;
  }
  @media screen and (min-width: 320px) {
    font-size: 1.2em;
    margin-left: 10px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-left: 0;
  margin: 0 auto; // Zentrierung des Karussells

  @media screen and (max-width: 768px) {
    max-width: 100%; /* Das Karussell füllt den verfügbaren Platz auf kleineren Bildschirmen */
    margin-left: 0; /* In der mobilen Ansicht wird kein seitlicher Abstand benötigt */
  }
  @media screen and (min-width: 320px) {
    font-size: 1.2em;
    position: relative;
    width: 100%;
    margin-left: 0;
  }
`;

const Carousel = styled.div`
  display: flex;
  width: ${(props) => `${props.slideCount * 100}%`};
  transition: transform 0.5s ease;
  transform: translateX(
    ${(props) => -props.currentSlide * (100 / props.slideCount)}%
  );
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: ${(props) => `${100 / props.slideCount}%`};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%; /* Das Bild passt sich der Größe des Karussells an */

  @media screen and (min-width: 321px) {
    max-width: 100%; /* Hier kann die gewünschte Breite des Bildes auf kleineren Bildschirmen angepasst werden */
  }

  @media screen and (min-width: 768px) {
    max-width: 100%; /* Das Bild passt sich wieder der vollen Breite des Karussells an */
  }
`;

const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  color: black;
`;

const Icon = styled.img`
  width: 39px; /* Ändere die Breite auf den gewünschten Wert */
  height: 30px; /* Ändere die Höhe auf den gewünschten Wert */
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 39px;
    height: 30px;
    margin-right: 20px;
  }
  @media screen and (min-width: 320px) {
    font-size: 1.2em;
    margin-left: 10px;
  }
`;

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <CarouselContainer>
      <Carousel slideCount={images.length} currentSlide={currentSlide}>
        {images.map((image, index) => (
          <Slide key={index} slideCount={images.length}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </Carousel>
      <SliderButtonContainer>
        <PreviousButton onClick={handlePreviousSlide}>◀️</PreviousButton>

        <NextButton onClick={handleNextSlide}>▶️</NextButton>
      </SliderButtonContainer>
    </CarouselContainer>
  );
};

const FourthSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderIcons = (icons) => {
    return (
      <IconContainer>
        {icons.map((icon, index) => (
          <Icon src={icon} alt={`Icon ${index + 1}`} key={index} />
        ))}
      </IconContainer>
    );
  };

  const pages = [
    {
      title: "Routix KI Reiseplaner",
      subTitle: "//UX RESEARCH //UI DESIGN //PRODUCT DESIGN ",
      text: "Dieses Projekt zielte darauf ab, eine innovative, KI-basierte Reiseplaner-App zu entwickeln, die es Nutzern ermöglicht, individuelle Reiserouten basierend auf ihren Interessen und ihrem Zeitplan zu erstellen. Ziel war es, den Prozess der Reiseplanung zu vereinfachen und gleichzeitig die Umwelt zu schonen, indem unnötige Reisen vermieden werden.",
      icons: ["/fig.svg", "/mj.svg", "/ps.svg", "/ai.svg"],
      images: [
        "/2routix.svg",
        "/3routix.svg",
        "/4routix.svg",
        "/5routix.svg",
        "/6routix.svg",
        "/7routix.svg",
        "/8routix.svg",
        "/9routix.svg",
        "/10routix.svg",
        "/11routix.svg",
        "/12routix.svg",
        "/13routix.svg",
      ],
    },
    // ... Weitere Seiten
    {
      title: "Routix KI Reiseplaner",
      subTitle: "UX RESEARCH UI INTERFACE DESIGNE",
      text: "Dieses Projekt zielte darauf ab, eine innovative, KI-basierte Reiseplaner-App zu entwickeln, die es Nutzern ermöglicht, individuelle Reiserouten basierend auf ihren Interessen und ihrem Zeitplan zu erstellen. Ziel war es, den Prozess der Reiseplanung zu vereinfachen und gleichzeitig die Umwelt zu schonen, indem unnötige Reisen vermieden werden.",
      icons: ["icon4.svg", "icon5.svg", "icon6.svg"],
      images: ["/duft.png", "/duft.png", "/diren.png"],
    },
  ];

  return (
    <MainSection id="section4">
      <ContentSection currentPage={currentPage}>
        {pages.map((page, index) => (
          <PageContent key={index} currentPage={currentPage === index}>
            <ColumnContent>
              <div>
                <Title>{page.title}</Title>
                <SubTitle>{page.subTitle}</SubTitle>
                <TextField>{page.text}</TextField>
                {renderIcons(page.icons)}
              </div>
              <div>
                {currentPage === index && (
                  <ImageCarousel images={page.images} />
                )}
              </div>
            </ColumnContent>
          </PageContent>
        ))}
      </ContentSection>

      <ButtonContainer>
        {currentPage > 0 && (
          <PreviousButton onClick={handlePreviousPage}>Zurück</PreviousButton>
        )}
        {currentPage < 3 ? (
          <NextButton onClick={handleNextPage}>Weiter</NextButton>
        ) : (
          <NextButton disabled>Weiter</NextButton>
        )}
      </ButtonContainer>
    </MainSection>
  );
};

export default FourthSection;
