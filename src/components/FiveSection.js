import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Hinzufügen */
`;

const ContactInfo = styled.div`
  text-align: center;
`;

const EmailLink = styled.a`
  margin-bottom: 10px;
  display: block;
  font-family: OpenSans;
  font-size: 20px;
  color: black;
  text-decoration: none;
`;

const PhoneNumber = styled.p`
  margin-bottom: 10px;
  font-family: OpenSans;
  font-size: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIconLink = styled.a`
  margin: 0 10px;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: transparent;
  z-index: 0;
  overflow: hidden;
`;

const TextAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100vw);
  }
`;

const AnimatedText = styled.span`
  display: inline-block;
  color: black;
  font-size: 24px;
  font-family: OpenSans;
  animation: ${TextAnimation} 19s linear infinite;
  position: absolute;
  right: 0;
  white-space: nowrap;

  @media (max-width: 375px) {
    font-size: 15px;
    animation-duration: 10s;
  }
  @media (max-width: 320px) {
    font-size: 15px;
    animation-duration: 10s;
  }
`;

const FourthSection = () => {
  return (
    <Section id="section5">
      <ContactInfo>
        <EmailLink href="mailto:diren@tikil.de">diren@tikil.de</EmailLink>
        <PhoneNumber>Tel: +49 016095281093 </PhoneNumber>
        <SocialLinks>
          <SocialIconLink href="https://www.linkedin.com/in/diren-tikil/">
            <SocialIcon src="/in.svg" alt="Linkedin" />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/Diren-T/">
            <SocialIcon src="/git.svg" alt="Github" />
          </SocialIconLink>
          <SocialIconLink href="https://www.instagram.com/diren.tkl/?next=%2F/">
            <SocialIcon src="/insta.svg" alt="Instagram" />
          </SocialIconLink>
        </SocialLinks>
      </ContactInfo>
      <BottomBar>
        <AnimatedText>
          --- Keine Cookies. Deine Privatsphäre ist mir wichtig ---
        </AnimatedText>
      </BottomBar>
    </Section>
  );
};

export default FourthSection;
