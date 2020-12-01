import React from "react";
import { navigate } from "gatsby";
import { Button, H1, P1, H2, P2, PRIMARY_YELLOW } from "../styles/styles";
import {
  ColorSection,
  Header,
  Paragraph1,
  Paragraph2,
  Content,
  RelativeContainer,
  Header2
} from "./styled";

const Education = ({ content, color }) => {

  return (
    <ColorSection color={color}>
      <RelativeContainer>
        <Header2>
        <H2>Education</H2>
        </Header2>
        <Header>
          <H1>{content.heading}</H1>
        </Header>
      </RelativeContainer>
      <Content>
        <Paragraph1>
          <P1>{content.description}</P1>
        </Paragraph1>
        <Paragraph2>
          <P1>{content.description2}</P1>
        </Paragraph2>
      </Content>
    </ColorSection>
  );
};

export default Education;
