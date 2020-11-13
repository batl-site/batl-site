import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  Container,
  ContentContainer,
  DescriptionContainer,
  ImageContainer,
  MissionImage,
} from "./styled";

const MissionStatement = ({ content }) => {
  return (
    <div>
      <div className="container mb-5 mb-md-auto">
        <H2>Our Vision</H2>
        <H1 className="header-spacing">{content.statement}</H1>
        <DescriptionContainer className="col-12 col-md-6 col-lg-4 d-block d-md-none p-0">
          <P1>{content.description}</P1>
        </DescriptionContainer>
      </div>
      <Container>
        <ContentContainer className="d-none d-md-inline-flex justify-content-between">
          <DescriptionContainer className="col-12 col-md-6 col-lg-4 col-xl-5 mr-4">
            <P1>{content.description}</P1>
          </DescriptionContainer>
          <ImageContainer className="col-xl-7 p-0">
            <MissionImage src={content.imageSrc} />
          </ImageContainer>
        </ContentContainer>
      </Container>
      <ImageContainer className="float-right d-block d-md-none">
        <MissionImage src={content.imageSrc} />
      </ImageContainer>
    </div>
  );
};

export default MissionStatement;
