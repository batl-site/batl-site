import React from 'react'
import { H1, H2, P1 } from '../../styles/styles'
import { ColorBlock, Container, ContentContainer, SideImage, FullBleedImage, XLImage } from './styled'

const WhatWeDoHero = ({ content }) => (
  <ColorBlock>
    <FullBleedImage src={content.image.fields.file.url}/>
    <Container>
      <ContentContainer>
        <H2>What We Do</H2>
        <H1>{content.heading}</H1>
        <P1>{content.description}</P1>
      </ContentContainer>
      <XLImage src={content.image.fields.file.url} />
    </Container>
    <SideImage src={content.image.fields.file.url} />
  </ColorBlock>
)

export default WhatWeDoHero
