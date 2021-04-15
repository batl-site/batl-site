import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Circles from "../../../images/sprinkles/green-horizontal.svg";
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

const WhatWeDoHero = ({ content }) => {
  console.log(content);
  return (
    <ColorBlock>
      <FullBleedImage
        src={content.image.fields.file.url}
        alt="Image of scientists sitting together around a white desk."
      />
      <Container>
        <ContentContainer>
          <H2>What We Do</H2>
          <H1>{content.heading}</H1>
          <P1>{documentToReactComponents(content.richDescription)}</P1>
        </ContentContainer>
        <XLImage
          src={content.image.fields.file.url}
          alt="Image of scientists sitting together around a white desk."
        />
        <Sprinkle src={Circles} />
      </Container>
      <SideImage
        src={content.image.fields.file.url}
        alt="Image of scientists sitting together around a white desk."
      />
    </ColorBlock>
  );
};

export default WhatWeDoHero;
