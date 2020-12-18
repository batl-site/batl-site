import React from 'react'
import { LargeImage, ImageContainer, SmallImage, MediumImage, RowOne, RowTwo, RowThree } from './styled'

const Images = ({ images, variant }) => {
    return (
    <ImageContainer>
      <RowOne variant={variant}>
        <MediumImage src={images[0].fields.file.url} />
      </RowOne>
      <RowTwo variant={variant}>
        <MediumImage src={images[1].fields.file.url} />
      </RowTwo>
      <RowThree variant={variant}>
        <MediumImage src={images[2].fields.file.url} />
      </RowThree>
    </ImageContainer>
    )
}

export default Images
