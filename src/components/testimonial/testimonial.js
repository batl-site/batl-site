import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  ColorWrapper,
  Container,
  Name
} from "./styled";

const Testimonial = ({ content }) => {
  return (
    <>
      <ColorWrapper>
          <Container>
              <H1>{content.testimonial}</H1>
              {content.position && <H2>{content.position}</H2>}
              <Name><P1>{content.name}</P1></Name>
          </Container>

      </ColorWrapper>
    </>
  );
};

export default Testimonial;