import React from 'react'
import { LargeImage, DoubleImageContainer, SmallImage, MediumImage, RowOne, RowTwo } from './styled'

const Images = ({ images, variant }) => {
  return images.length < 2 ? (
    <LargeImage src={images[0].fields.file.url} />
  ) : (
    <DoubleImageContainer>
      <RowOne variant={variant}>
        <SmallImage src={images[0].fields.file.url} />
      </RowOne>
      <RowTwo variant={variant}>
        <MediumImage src={images[1].fields.file.url} />
      </RowTwo>
    </DoubleImageContainer>
  )
}

export default Images