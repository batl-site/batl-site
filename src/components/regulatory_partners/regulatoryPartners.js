import React from "react";
import { H2 } from "../styles/styles";
import { Images, ImageWrapper } from "./styled";
import Image from "./images/image";

const RegulatoryPartners = ({ content }) => {
  return (
    <ImageWrapper>
      <H2>Regulatory Partners</H2>
      <Images>
        {content.map((image, i) => (
          <Image key={i} content={image.fields.file.url} />
        ))}
      </Images>
    </ImageWrapper>
  );
  
};

export default RegulatoryPartners;
