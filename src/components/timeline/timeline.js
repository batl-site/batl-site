import React from "react";
import TimelineMoment from "./timeline_moment/timelineMoment";
import { Container, Line, ImageContainer, Sprinkle } from "./styled";
import { MediumImage } from "../image_info_section/images/styled";
import BigYellow from "../../images/sprinkles/filled-small-yellow.svg";

const Timeline = ({ moments, image }) => (
  <Container>
    <Line>
      {moments.map((moment, i) => (
        <TimelineMoment key={i} indent={(i + 1) % 3} content={moment.fields} />
      ))}
    </Line>
    <ImageContainer>
      <Sprinkle src={BigYellow} />
      <MediumImage src={image} />
    </ImageContainer>
  </Container>
);

export default Timeline;
