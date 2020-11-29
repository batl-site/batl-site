import React from "react";
import { navigate } from "gatsby";
import { Button, H1, P1, H2, P2, PRIMARY_YELLOW } from "../styles/styles";
import {
  ColorSection,
  TwoColumn,
  Header,
  OneColumn,
  Content,
  ButtonText,
  RelativeContainer,
} from "./styled";

const Education = ({ content, color }) => {

  return (
    <ColorSection color={color}>
      <RelativeContainer>
        <H2>Education</H2>
        <Header>
          <H1>{content.heading}</H1>
        </Header>
      </RelativeContainer>
      <Content>
        <OneColumn>
          <P1>{content.description}</P1>
        </OneColumn>
        <TwoColumn>
          <P1>{content.description}</P1>
        </TwoColumn>
      </Content>
    </ColorSection>
  );
};

export default Education;
