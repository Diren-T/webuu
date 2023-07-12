import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.div`
  text-align: center;
`;

const EmailLink = styled.a`
  margin-bottom: 10px;
  display: block;
  font-family: "Arial Black", Arial, sans-serif;
  font-size: 20px;
  color: black;
  text-decoration: none;
`;

const PhoneNumber = styled.p`
  margin-bottom: 10px;
  font-family: "Arial Black", Arial, sans-serif;
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

const FourthSection = () => {
  return (
    <Section id="section5">
      <ContactInfo>
        <EmailLink href="mailto:deine-email@example.com">
          diren@tikil.de
        </EmailLink>
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
    </Section>
  );
};

export default FourthSection;
