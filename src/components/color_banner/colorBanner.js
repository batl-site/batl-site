import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { H2, P1 } from "../styles/styles";
import {
  Banner,
  Columns,
  Container,
  Content,
  Heading,
  HideOverflow,
} from "./styled";

const ColorBanner = ({ section, content, splitColumns, left, wide }) => (
  <HideOverflow>
    <Container>
      <Content left={left} wide={wide}>
        <H2>{section}</H2>
        <Banner left={left}>
          <Heading>{content.heading}</Heading>
        </Banner>
        {splitColumns ? (
          <Columns>
            {documentToReactComponents(content.richDescription)}
          </Columns>
        ) : (
          <P1>{documentToReactComponents(content.richDescription)}</P1>
        )}
      </Content>
    </Container>
  </HideOverflow>
);

export default ColorBanner;
