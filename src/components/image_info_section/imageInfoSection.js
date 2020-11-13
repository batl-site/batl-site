import React from 'react'
import { H1, H2, P1 } from '../styles/styles'
import Images from './images/images'
import { Container } from './styled'

const ImageInfoSection = ({ section, content, variant }) => (
  <Container className="d-flex flex-wrap align-items-center">
    <div className="col-l2 col-lg-5 d-flex justify-content-center">
      <Images images={content.images} variant={variant} />
    </div>
    <div className="col-12 col-lg-7">
      <H2>{section}</H2>
      <H1>{content.heading}</H1>
      <P1>{content.description}</P1>
    </div>
  </Container>
)

export default ImageInfoSection