import React from "react";
import SecondaryLink from "../../secondary_link/secondaryLink";
import { H1, P1 } from "../../styles/styles";
import {
  HeroBlockOverlay,
  HeroImage,
  HeroImageContainer,
  HeroBlockPosition,
  HpHeroContainer,
  Container,
} from "./styled";

const HpHero = ({ content }) => {
  const buttonContent = content.ctaButton;
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
            {buttonContent && (
              <SecondaryLink
                content={{
                  url: buttonContent.buttonLink,
                  label: buttonContent.label,
                }}
              />
            )}
          </HeroBlockOverlay>
        </HeroBlockPosition>
      </Container>
    </HpHeroContainer>
  );
};

export default HpHero;
