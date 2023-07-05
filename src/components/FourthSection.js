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
  transform: translateX(${(props) => -props.currentPage * 100}%);

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
`;

const NextButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
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
  grid-gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 80px;
  }
`;

const Title = styled.h1`
  font-family: "Arial Black", sans-serif;
  text-align: left;
  font-size: 2em;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 40px;
  }
`;

const SubTitle = styled.h2`
  font-family: "Arial Black", sans-serif;
  text-align: left;
  font-size: 1.5em;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 40px;
  }
`;

const TextField = styled.p`
  font-family: "Arial Regular", sans-serif;
  text-align: left;
  margin-bottom: 20px;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    max-width: 300px; /* Hier kann die gewünschte Breite angepasst werden */
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 100px; /* Hier kann der gewünschte Abstand nach unten angepasst werhttp://localhost:3000/12routix.svgden */

  @media screen and (max-width: 768px) {
    margin-top: 10px; /* Hier kann der gewünschte Abstand nach unten angepasst werden */
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  max-width: 800px; /* Hier kann die maximale Breite des Karussells angepasst werden */

  @media screen and (max-width: 768px) {
    max-width: 100%; /* Das Karussell füllt den verfügbaren Platz auf kleineren Bildschirmen */
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
    max-width: 50%; /* Hier kann die gewünschte Breite des Bildes auf kleineren Bildschirmen angepasst werden */
  }

  @media screen and (min-width: 768px) {
    max-width: 100%; /* Das Bild passt sich wieder der vollen Breite des Karussells an */
  }
`;

const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: black;
`;

const SliderButton = styled.button`
  width: 24px;
  height: 24px;
  background: black;
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.active &&
    `
    background: white;
  `}
`;

const Icon = styled.img`
  width: 39px; /* Ändere die Breite auf den gewünschten Wert */
  height: 30px; /* Ändere die Höhe auf den gewünschten Wert */
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 20px; /* Hier kann die gewünschte Breite angepasst werden */
    height: 20px; /* Hier kann die gewünschte Höhe angepasst werden */
    margin-right: 10px;
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
        {images.map((_, index) => (
          <SliderButton
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
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
      subTitle: "UX RESEARCH UI INTERFACE DESIGNE",
      text: "Dieses Projekt zielte darauf ab, eine innovative, KI-basierte Reiseplaner-App zu entwickeln, die es Nutzern ermöglicht, individuelle Reiserouten basierend auf ihren Interessen und ihrem Zeitplan zu erstellen. Ziel war es, den Prozess der Reiseplanung zu vereinfachen und gleichzeitig die Umwelt zu schonen, indem unnötige Reisen vermieden werden.",
      icons: ["/fig.svg", "/mj.svg", "/ps.svg", "/ai.svg"],
      images: [
        "/1routix.svg",
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
