import React from "react";
import { H1, P1 } from "../../styles/styles";
import { BottomAligner, HeroContainer, Content, Container } from "./styled";

const ContactHero = ({ content }) => {
  return (
    <HeroContainer className="container-fluid">
      <BottomAligner></BottomAligner>
      <Container>
        <Content className="col-12 col-lg-7">
          <H1>{content.heading}</H1>
          <P1>{content.description}</P1>
        </Content>
      </Container>
    </HeroContainer>
  );
};

export default ContactHero;
