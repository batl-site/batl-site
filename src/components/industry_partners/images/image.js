import React from "react";
import {
  PartnerImage,
  ImageContainer,
  SizeWrapper,
} from "./styled";

const Image = ({ content }) => {
  const imageSrc = content;
  return (
    <SizeWrapper>
      <ImageContainer>
        <PartnerImage image={imageSrc}></PartnerImage>
      </ImageContainer>
    </SizeWrapper>
  );
};

export default Image;