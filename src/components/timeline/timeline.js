import React from 'react'
import TimelineMoment from './timeline_moment/timelineMoment'
import { Container, Line } from './styled'

const Timeline = ({ moments }) => (
  <Container>
    <Line>
      {moments.map((moment, i) => (
        <TimelineMoment
          key={i}
          indent={(i + 1) % 3}
          content={moment.fields} />
      ))}
    </Line>
  </Container>
)

export default Timeline
