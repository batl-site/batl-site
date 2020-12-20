import React from "react";
import { Images, ImageWrapper, Container, Heading } from "./styled";
import Image from "./images/image";

const RegulatoryPartners = ({ content }) => {
  return (
    <Container>
    <ImageWrapper>
      <Heading>Regulatory Partners</Heading>
      <Images>
        {content.map((image, i) => (
          <Image key={i} content={image.fields.file.url} />
        ))}
      </Images>
    </ImageWrapper>
    </Container>
  );
  
};

export default RegulatoryPartners;
