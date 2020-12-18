import React from "react";
import { H1, P1 } from "../../styles/styles";
import Images from "./images/images";
import { BottomAligner, HeroContainer, Content, Container, ImagesContainer } from "./styled";

const ContactHero = ({ content }) => {
  return (
    <HeroContainer className="container-fluid">
      <BottomAligner></BottomAligner>
      <Container>
        <Content>
          <H1>{content.heading}</H1>
          <P1>{content.description}</P1>
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
