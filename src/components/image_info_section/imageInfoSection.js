import React from 'react'
import { H1, H2, P1 } from '../styles/styles'
import Images from './images/images'
import { Container, ImagesContainer, ContentContainer } from './styled'

const ImageInfoSection = ({ id, section, content, variant }) => (
  <Container id={id}>
    <ImagesContainer>
      <Images images={content.images} variant={variant} />
    </ImagesContainer>
    <ContentContainer>
      <H2>{section}</H2>
      <H1>{content.heading}</H1>
      <P1>{content.description}</P1>
    </ContentContainer>
  </Container>
)

export default ImageInfoSection
