import React from "react";
import { navigate } from "gatsby";
import { Button, H1, P1, P2, PRIMARY_GREY } from "../styles/styles";
import {
  ColorSection,
  TwoColumn,
  Header,
  OneColumn,
  Content,
  ButtonText,
  Container,
  ColorBlockWrapper,
  SprinkleYellow,
  SprinkleNavy,
  SprinkleContainer,
} from "./styled";
import FilledYellow from "../../images/sprinkles/filled-yellow.svg";
import OutlinedNavy from "../../images/sprinkles/outlined-navy.svg";

const ColorBlock = ({ content, color }) => {
  const buttonContent = content.callToAction.fields;
  return (
    <ColorBlockWrapper className="container-fluid p-0">
      <ColorSection color={color}>
        <Container>
          <Header>
            <H1>{content.heading}</H1>
          </Header>
        </Container>
        <Content>
          <OneColumn>
            <P1>{content.description}</P1>
            <Button
              className="mt-4"
              onClick={() => navigate(`${buttonContent.buttonLink}`)}
              color={PRIMARY_GREY}
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
        <SprinkleContainer>
          <SprinkleYellow src={FilledYellow} />
          <SprinkleNavy src={OutlinedNavy} />
        </SprinkleContainer>
      </ColorSection>
    </ColorBlockWrapper>
  );
};

export default ColorBlock;
