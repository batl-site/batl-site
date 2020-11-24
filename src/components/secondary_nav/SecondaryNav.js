import React from 'react'
import { Container, Tabs, Tab } from './styled'
import { P2 } from '../styles/styles'

const SecondaryNav = () => (
  <Container>
    <Tabs>
      <Tab to='/whoWeAre#mission'><P2>Our Mission</P2></Tab>
      <Tab to='/whoWeAre#timeline'><P2>Timeline</P2></Tab>
      <Tab to='/whoWeAre#values'><P2>Our Values</P2></Tab>
      <Tab to='/whoWeAre#team'><P2>Our Team</P2></Tab>
    </Tabs>
  </Container>
)

export default SecondaryNav
