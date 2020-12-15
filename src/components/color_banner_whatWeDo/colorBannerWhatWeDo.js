import React from 'react'
import { H2, P1 } from '../styles/styles'
import { HideOverflow, Container, Content, Banner, Heading, Paragraph1, Columns } from './styled'

const ColorBannerWhatWeDo = ({ section, content, left }) => (
<HideOverflow>
  <Container>
    <Content left={left}>
      <H2>{section}</H2>
      <Banner left={left}>
        <Heading>{content.heading}</Heading>
      </Banner>
        <Paragraph1>
          <P1>{content.description}</P1>
        </Paragraph1>
    </Content>
  </Container>
</HideOverflow>
)

export default ColorBannerWhatWeDo
