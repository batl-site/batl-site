import React from "react";
import { Images, ImageWrapper, ColorSection } from "./styled";
import Image from "./images/image";

const IndustryPartners = ({ content, color }) => {
  return (
    <ColorSection color={color}> 
    <ImageWrapper>
      <Images>
        {content.map((image, i) => (
          <Image key={i} content={image.fields.file.url} />
        ))}
      </Images>
    </ImageWrapper>
    </ColorSection>
  );
  
};

export default IndustryPartners;