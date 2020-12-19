import React from 'react'
import { ImageContainer, MediumImage, RowOne, RowTwo, RowThree, Sprinkle, SprinkleCircle } from './styled'
import FilledYellow from "../../../../images/sprinkles/filled-yellow.svg"

const Images = ({ images }) => {
    return (
    <ImageContainer>
      <RowOne>
        <MediumImage src={images[0].fields.file.url} />
        <Sprinkle />
      </RowOne>
      <RowTwo>
        <MediumImage src={images[1].fields.file.url} />
      </RowTwo>
      <RowThree>
        <MediumImage src={images[2].fields.file.url} />
        <SprinkleCircle src={FilledYellow} />
      </RowThree>
    </ImageContainer>
    )
}

export default Images
