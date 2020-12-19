import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  ColorWrapper,
  Container,
  QuotationMark
} from "./styled";

const Testimonial = ({ content, color }) => {
  return (
    <>
      <ColorWrapper color={color}>
          <Container>
            <QuotationMark>&ldquo;</QuotationMark>
              <H1>{content.testimonial}</H1>
              <P1>{content.name}</P1>
              {content.position && <H2>{content.position}</H2>}
          </Container>

      </ColorWrapper>
    </>
  );
};

export default Testimonial;