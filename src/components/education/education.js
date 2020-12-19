import React from "react";
import { H1, P1, H2 } from "../styles/styles";
import {
  ColorSection,
  TwoColumn,
  Header,
  Header2,
  OneColumn,
  Content,
  Container,
  ColorBlockWrapper,
  Sprinkle,
  SprinkleYellow,
  SprinkleContainer
} from "./styled";
import DotGrid from "../../images/sprinkles/dot-grid.svg"
import FilledYellow from "../../images/sprinkles/filled-yellow.svg";

const Education = ({ content, color }) => {
    return (
      <>
      <ColorBlockWrapper className="container-fluid p-0">
      <ColorSection color={color}>
        <Container>
        <Header2>
          <H2>Education</H2>
        </Header2>
            <Header>
              <H1>{content.heading}</H1>
            </Header>
        </Container>
        <Content>
          <OneColumn>
            <P1>{content.description}</P1>
          </OneColumn>
          <TwoColumn>
            <P1>{content.description}</P1>
          </TwoColumn>
        </Content>
      </ColorSection>
      </ColorBlockWrapper>
      <SprinkleContainer>
        <SprinkleYellow src={FilledYellow} />
        <Sprinkle src={DotGrid} />
      </SprinkleContainer>
      </>
    );
};

export default Education;
