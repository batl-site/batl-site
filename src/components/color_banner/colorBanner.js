import React from 'react'
import { H2, P1 } from '../styles/styles'
import { HideOverflow, Container, Content, Banner, Heading, Columns } from './styled'

const ColorBanner = ({ section, content, splitColumns, left }) => (
<HideOverflow>
  <Container>
    <Content left={left}>
      <H2>{section}</H2>
      <Banner left={left}>
        <Heading>{content.heading}</Heading>
      </Banner>
      {splitColumns ? (
        <Columns>{content.description}</Columns>
      ) : (
        <P1>{content.description}</P1>
      )}
    </Content>
  </Container>
</HideOverflow>
)

export default ColorBanner
