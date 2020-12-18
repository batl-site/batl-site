import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  AbsoluteContainer,
  ColorWrapper,
  Container,
  ContainerLine,
  Content,
  ContentSection,
  ContentSectionSmall,
  Header,
  HeroImage,
  HeroImageContainer,
  Line,
  SectionTitle,
} from "./styled";

const Sock = ({ content }) => {
  console.log("this is sock content", content);
  return (
    <>
      <ColorWrapper>
        <Container>
          <AbsoluteContainer>
            <Header>
              <H1>{content.header}</H1>
            </Header>
          </AbsoluteContainer>
        </Container>
        <Container>
          <Content>
            <ContentSection>
              <SectionTitle>By Car</SectionTitle>
              <P1>{content.car}</P1>
            </ContentSection>
            <ContentSection>
              <SectionTitle>By Shuttle</SectionTitle>
              <P1>{content.shuttle}</P1>
            </ContentSection>
            <ContentSectionSmall>
              <SectionTitle>Address</SectionTitle>
              <P1>{content.location}</P1>
            </ContentSectionSmall>
          </Content>
        </Container>
      </ColorWrapper>
      <HeroImageContainer className="p-0">
        <HeroImage image={content.imageSrc}></HeroImage>
      </HeroImageContainer>
    </>
  );
};

export default Sock;
