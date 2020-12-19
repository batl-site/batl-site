import React from "react";
import GoogleMap from "../google_map/map";
import SecondaryLink from "../secondary_link/secondaryLink";
import { H1, H2, P1 } from "../styles/styles";
import {
  AbsoluteContainer,
  ColorWrapper,
  Container,
  Content,
  ContentSection,
  ContentSectionSmall,
  Header,
  SectionTitle,
} from "./styled";

const LocationInfo = ({ content }) => {
  const location = {
    lat: content.coordinates.lat,
    lng: content.coordinates.lon,
  }
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
              {content.seeMoreLink && <SecondaryLink content={{ url: content.seeMoreLink, label: "More" }} />}
            </ContentSection>
            <ContentSectionSmall>
              <SectionTitle>Address</SectionTitle>
              <P1>{content.location}</P1>
            </ContentSectionSmall>
          </Content>
        </Container>
      </ColorWrapper>
      <GoogleMap location={location} zoomLevel={16}/>
    </>
  );
};

export default LocationInfo;
