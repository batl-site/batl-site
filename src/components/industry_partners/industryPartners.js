import React from "react";
import { Images, ImageWrapper, ColorSection, Sprinkle } from "./styled";
import Image from "./images/image";
import Circles from "../../images/sprinkles/vertical-navy.svg";

const IndustryPartners = ({ content, color }) => {
  return (
    <ColorSection color={color}> 
    <ImageWrapper>
      <Images>
        {content.map((image, i) => (
          <Image key={i} content={image.fields.file.url} />
        ))}
      </Images>
    <Sprinkle src={Circles}/>
    </ImageWrapper>
    </ColorSection>
  );
  
};

export default IndustryPartners;