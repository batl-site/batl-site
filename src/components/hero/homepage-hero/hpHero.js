import React from "react";
import { H1 } from "../../styles/styles";
import {
  HeroImage,
  HeroImageContainer,
  HpHeroContainer,
  Container,
  ColorBlock,
  ColorOverlay,
} from "./styled";

const HpHero = ({ content }) => {
  return (
    <HpHeroContainer>
      <HeroImageContainer>
        <HeroImage image={content.imageSrc}></HeroImage>
      </HeroImageContainer>
      <ColorOverlay>
        <ColorBlock>
          <Container>
            <H1 className="mb-0">{content.heading}</H1>
          </Container>
        </ColorBlock>
      </ColorOverlay>
    </HpHeroContainer>
  );
};

export default HpHero;
