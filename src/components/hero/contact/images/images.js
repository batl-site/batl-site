import React from 'react'
import { ImageContainer, MediumImage, RowOne, RowTwo, RowThree } from './styled'

const Images = ({ images }) => {
    return (
    <ImageContainer>
      <RowOne>
        <MediumImage src={images[0].fields.file.url} />
      </RowOne>
      <RowTwo>
        <MediumImage src={images[1].fields.file.url} />
      </RowTwo>
      <RowThree>
        <MediumImage src={images[2].fields.file.url} />
      </RowThree>
    </ImageContainer>
    )
}

export default Images
