import React from "react";
import { Images, ImageWrapper, ColorSection, Sprinkle, SprinkleContainer } from "./styled";
import Image from "./images/image";
import Circles from "../../images/sprinkles/vertical-navy.svg";

const IndustryPartners = ({ content, color }) => {
  return (
    <>
    <ColorSection color={color}> 
    <ImageWrapper>
      <Images>
        {content.map((image, i) => (
          <Image key={i} content={image.fields.file.url} />
        ))}
      </Images>
    </ImageWrapper>
    </ColorSection>
    <SprinkleContainer>
    <Sprinkle src={Circles}/>
    </SprinkleContainer>
    </>
  );
  
};

export default IndustryPartners;