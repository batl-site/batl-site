import React from "react";
import { navigate } from "gatsby";
import { Button, H1, P1, P2 } from "../styles/styles";
import {
  ColorSection,
  TwoColumn,
  Header,
  OneColumn,
  Content,
  ButtonText,
  RelativeContainer,
} from "./styled";

const ColorBlock = ({ content, color }) => {
  const buttonContent = content.callToAction.fields;
  return (
    <ColorSection color={color}>
      <RelativeContainer>
        <Header className="col-10 col-md-8 col-lg-6 col-xl-4">
          <H1>{content.heading}</H1>
        </Header>
      </RelativeContainer>
      <Content>
        <OneColumn className="d-block d-sm-none d-col-12">
          <P1>{content.description}</P1>
          <Button
            className="mt-4"
            onClick={() => navigate(`${buttonContent.buttonLink}`)}
          >
            <ButtonText>
              <P2>{buttonContent.label}</P2>
            </ButtonText>
          </Button>
        </OneColumn>
        <TwoColumn className="d-none d-sm-block col-11 col-md-10 col-lg-8 col-xl-8 ">
          <P1>{content.description}</P1>
          <Button
            className="mt-4"
            onClick={() => navigate(`${buttonContent.buttonLink}`)}
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
