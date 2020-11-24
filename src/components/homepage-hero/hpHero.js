import { Link } from "gatsby";
import React from "react";
import { H1, P1, P2, SecondaryLink } from "../styles/styles";
import {
  HeroBlockOverlay,
  HeroImage,
  HeroImageContainer,
  HeroBlockPosition,
  HpHeroContainer,
  Container
} from "./styled";

const HpHero = ({ content }) => {
    const buttonContent = content.ctaButton
  return (
    <HpHeroContainer>
      <HeroImageContainer>
        <HeroImage image={content.imageSrc}></HeroImage>
      </HeroImageContainer>
      <Container>
        <HeroBlockPosition>
          <HeroBlockOverlay>
            <H1>{content.heading}</H1>
            <P1>{content.description}</P1>
            {buttonContent && <Link to={buttonContent.buttonLink}><SecondaryLink>{buttonContent.label} &#62;</SecondaryLink></Link>}
          </HeroBlockOverlay>
        </HeroBlockPosition>
      </Container>
    </HpHeroContainer>
  );
};

export default HpHero;
