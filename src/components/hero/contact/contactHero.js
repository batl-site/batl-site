import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { H1, P1 } from "../../styles/styles";
import Images from "./images/images";
import {
  BottomAligner,
  Container,
  Content,
  HeroContainer,
  ImagesContainer,
} from "./styled";

const ContactHero = ({ content }) => {
  return (
    <HeroContainer className="container-fluid">
      <BottomAligner></BottomAligner>
      <Container>
        <Content>
          <H1>{content.heading}</H1>
          <P1>{documentToReactComponents(content.richDescription)}</P1>
        </Content>
        {content.images && (
          <ImagesContainer>
            <Images images={content.images} />
          </ImagesContainer>
        )}
      </Container>
    </HeroContainer>
  );
};

export default ContactHero;
