import React from 'react'
import { LargeImage, DoubleImageContainer, SmallImage, MediumImage, RowOne, RowTwo, SprinkleSmall, SprinkleMedium } from './styled'
import YellowWedge from "../../../images/sprinkles/right-wedge-yellow.svg";
import GreenCirle from "../../../images/sprinkles/green-circle.svg";

const Images = ({ images, variant }) => {
  return images.length < 2 ? (
    <LargeImage src={images[0].fields.file.url} />
  ) : (
    <DoubleImageContainer>
      <RowOne variant={variant}>
        <SmallImage src={images[0].fields.file.url} />
        <SprinkleSmall variant={variant} src={GreenCirle} />
      </RowOne>
      <RowTwo variant={variant}>
        <MediumImage src={images[1].fields.file.url} />
        <SprinkleMedium variant={variant} src={YellowWedge} />
      </RowTwo>
    </DoubleImageContainer>
  )
}

export default Images
