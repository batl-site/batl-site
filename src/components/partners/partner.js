import React from 'react'
import { H1, H2, P1 } from '../styles/styles'
import Images from './images/images'
import { Container } from './styled'

const Partner = ({ content, variant }) => (
  <Container className="d-flex flex-wrap align-items-center">
    <H1>{content.industryHeading}</H1>
  </Container>
)

export default Partner