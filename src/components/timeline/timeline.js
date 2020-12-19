import React from "react";
import TimelineMoment from "./timeline_moment/timelineMoment";
import { Container, Line, ImageContainer } from "./styled";
import { MediumImage } from "../image_info_section/images/styled";

const Timeline = ({ moments, image }) => (
  <Container>
    <Line>
      {moments.map((moment, i) => (
        <TimelineMoment key={i} indent={(i + 1) % 3} content={moment.fields} />
      ))}
    </Line>
    <ImageContainer>
      <MediumImage src={image} />
    </ImageContainer>
  </Container>
);

export default Timeline;
