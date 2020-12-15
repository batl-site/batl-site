import React from 'react'
import { H2, P1 } from '../../styles/styles'
import { Container, Indent, Dot, Content, Title } from './styled'

const TimelineMoment = ({ indent, content }) => (
  <Container>
    <Indent size={indent}>
      <Dot />
    </Indent>
    <Content>
      {content.date && <H2>{content.date}</H2>}
      <Title>{content.title}</Title>
      <P1>{content.description}</P1>
    </Content>
  </Container>
)

export default TimelineMoment
