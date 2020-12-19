import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  ColorWrapper,
  Container,
  QuotationMark,
  SprinkleContainer,
  Sprinkle
} from "./styled";
import DotGrid from "../../images/sprinkles/dot-grid.svg"

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
      <SprinkleContainer>
        <Sprinkle src={DotGrid} />
      </SprinkleContainer>
    </>
  );
};

export default Testimonial;