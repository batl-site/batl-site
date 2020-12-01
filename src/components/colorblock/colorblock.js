import React from "react";
import { navigate } from "gatsby";
import { Button, H1, P1, P2, PRIMARY_YELLOW } from "../styles/styles";
import {
  ColorSection,
  TwoColumn,
  Header,
  OneColumn,
  Content,
  ButtonText,
  AbsoluteContainer,
  Container,
} from "./styled";

const ColorBlock = ({ content, color }) => {
  const buttonContent = content.callToAction.fields;
  return (
    <ColorSection color={color}>
      <Container>
        <AbsoluteContainer>
          <Header>
            <H1>{content.heading}</H1>
          </Header>
        </AbsoluteContainer>
      </Container>
      <Content>
        <OneColumn>
          <P1>{content.description}</P1>
          <Button
            className="mt-4"
            onClick={() => navigate(`${buttonContent.buttonLink}`)}
            color={PRIMARY_YELLOW}
          >
            <ButtonText>
              <P2>{buttonContent.label}</P2>
            </ButtonText>
          </Button>
        </OneColumn>
        <TwoColumn>
          <P1>{content.description}</P1>
          <Button
            className="mt-4"
            onClick={() => navigate(`${buttonContent.buttonLink}`)}
            color={color}
          >
            <ButtonText>
              <P2>{buttonContent.label}</P2>
            </ButtonText>
          </Button>
        </TwoColumn>
      </Content>
    </ColorSection>
  );
};

export default ColorBlock;
