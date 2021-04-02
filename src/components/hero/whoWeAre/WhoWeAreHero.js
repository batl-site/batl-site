import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Circles from "../../../images/sprinkles/vertical-navy.svg";
import { H1, H2, P1 } from "../../styles/styles";
import {
  ColorBlock,
  Container,
  ContentContainer,
  FullBleedImage,
  SideImage,
  Sprinkle,
  XLImage,
} from "./styled";

const WhoWeAreHero = ({ content }) => (
  <ColorBlock>
    <FullBleedImage src={content.image.fields.file.url} />
    <Container>
      <ContentContainer>
        <H2>Who We Are</H2>
        <H1>{content.heading}</H1>
        <P1>{documentToReactComponents(content.richDescription)}</P1>
      </ContentContainer>
      <XLImage src={content.image.fields.file.url} />
      <Sprinkle src={Circles} />
    </Container>
    <SideImage src={content.image.fields.file.url} />
  </ColorBlock>
);

export default WhoWeAreHero;
