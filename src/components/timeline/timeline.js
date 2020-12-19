import React from "react";
import TimelineMoment from "./timeline_moment/timelineMoment";
import { Container, Line, ImageContainer, Sprinkle } from "./styled";
import { MediumImage } from "../image_info_section/images/styled";
import FilledYellow from "../../images/sprinkles/filled-yellow.svg";
import FilledNavy from "../../images/sprinkles/filled-navy.svg";
import OutlinedNavy from "../../images/sprinkles/outlined-navy.svg";
import OutlinedGreen from "../../images/sprinkles/outlined-green.svg";
import YellowWedge from "../../images/sprinkles/left-wedge-yellow.svg";
import NavyWedge from "../../images/sprinkles/left-wedge-navy.svg";
import GreenWedge from "../../images/sprinkles/left-wedge-green.svg";

const Timeline = ({ moments, image }) => {
  const sprinkles = [
    OutlinedNavy,
    GreenWedge,
    YellowWedge,
    FilledNavy,
    YellowWedge,
    GreenWedge,
    OutlinedGreen,
    NavyWedge,
  ];
  return (
    <Container>
      <Line>
        {moments.map((moment, i) => (
          <TimelineMoment
            key={i}
            indent={i % 3}
            content={moment.fields}
            sprinkle={sprinkles[i % 8]}
          />
        ))}
      </Line>
      <ImageContainer>
        <Sprinkle src={FilledYellow} />
        <MediumImage src={image} />
      </ImageContainer>
    </Container>
  );
};

export default Timeline;
