import React from "react";
import {
  LargeImageContainer,
  DoubleImageContainer,
  SmallImageContainer,
  MediumImageContainer,
  RowOne,
  RowTwo,
  SprinkleSmall,
  SprinkleMedium,
} from "./styled";
import YellowWedge from "../../../images/sprinkles/right-wedge-yellow.svg";
import GreenCirle from "../../../images/sprinkles/green-circle.svg";
import { RoundImage } from "../../styles/styles";

const Images = ({ images, variant }) => {
  return images.length < 2 ? (
    <LargeImageContainer>
      <RoundImage src={images[0].fields.file.url} />
    </LargeImageContainer>
  ) : (
    <DoubleImageContainer>
      <RowOne variant={variant}>
        <SmallImageContainer>
          <RoundImage src={images[0].fields.file.url} />
        </SmallImageContainer>
        <SprinkleSmall variant={variant} src={GreenCirle} />
      </RowOne>
      <RowTwo variant={variant}>
        <MediumImageContainer>
          <RoundImage src={images[1].fields.file.url} />
        </MediumImageContainer>
        <SprinkleMedium variant={variant} src={YellowWedge} />
      </RowTwo>
    </DoubleImageContainer>
  );
};

export default Images;
