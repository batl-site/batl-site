import React from "react";
import { H1, P1 } from "../styles/styles";
import { HeroBlockOverlay, HeroImage, HeroImageContainer } from "./styled";

const HpHero = ({ content }) => {
    
  return (
    <div>
      <HeroImageContainer className="container-fluid">
        <HeroImage image={content.imageSrc}></HeroImage>
      </HeroImageContainer>
      <div className="container">
        <HeroBlockOverlay className="col-12 col-md-8">
          <H1>{content.heading}</H1>
          <P1>{content.description}</P1>
        </HeroBlockOverlay>
      </div>
    </div>
  );
};

export default HpHero;
