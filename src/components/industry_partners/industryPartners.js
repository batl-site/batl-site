import React from "react";
import {
  Images,
  ImageWrapper,
  ColorSection,
  Sprinkle,
  SprinkleContainer,
  Container,
} from "./styled";
import Image from "./images/image";
import Circles from "../../images/sprinkles/vertical-navy.svg";

const IndustryPartners = ({ content, color }) => {
  return (
    <Container>
      <ColorSection color={color}>
        <ImageWrapper>
          <Images>
            {content.map((image, i) => (
              <Image key={i} content={image.fields.file.url} />
            ))}
          </Images>
        </ImageWrapper>
        <SprinkleContainer>
          <Sprinkle src={Circles} />
        </SprinkleContainer>
      </ColorSection>
    </Container>
  );
};

export default IndustryPartners;
