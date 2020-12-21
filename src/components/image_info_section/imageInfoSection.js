import { navigate } from "gatsby";
import React from "react";
import { Button, H1, H2, P1, P2 } from "../styles/styles";
import Images from "./images/images";
import {
  Container,
  ImagesContainer,
  ContentContainer,
  ButtonText,
} from "./styled";

const ImageInfoSection = ({ id, section, content, variant }) => {
  const buttonContent = content.callToAction
    ? content.callToAction.fields
    : null;
  return (
    <Container id={id}>
      <ImagesContainer>
        <Images images={content.images} variant={variant} />
      </ImagesContainer>
      <ContentContainer>
        <H2>{section}</H2>
        <H1>{content.heading}</H1>
        <P1>{content.description}</P1>
        {buttonContent && (
          <Button
            className="mt-4"
            onClick={() => navigate(`${buttonContent.buttonLink}`)}
          >
            <ButtonText>
              <P2>{buttonContent.label}</P2>
            </ButtonText>
          </Button>
        )}
      </ContentContainer>
    </Container>
  );
};

export default ImageInfoSection;
