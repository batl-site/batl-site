import React from 'react'
import { H1, H2, P1 } from '../styles/styles'
import { HideOverflow, Container, Content, Banner, Heading } from './styled'

const ColorBanner = ({ section, content }) => (
<HideOverflow>
  <Container>
    <Content>
      <H2>{section}</H2>
      <Banner>
        <Heading>{content.heading}</Heading>
      </Banner>
      <P1>{content.description}</P1>
    </Content>
  </Container>
</HideOverflow>
)

export default ColorBanner
