import React from "react";
import { H2, P1 } from "../../styles/styles";
import {
  ContentWrapper,
  Indent,
  Dot,
  Content,
  Title,
  Image,
  MobileImageContainer,
  MobileImage,
} from "./styled";

const TimelineMoment = ({ indent, content }) => (
  <div>
    {content.image && (
      <MobileImageContainer indent={indent}>
        <MobileImage src={content.image.fields.file.url} />
      </MobileImageContainer>
    )}
    <ContentWrapper>
      <Indent dateExists={content.year} size={indent}>
        <Dot />
      </Indent>
      <Content>
        {content.year && <H2>{content.year}</H2>}
        <Title>{content.title}</Title>
        <P1>{content.description}</P1>
      </Content>
      {content.image && (
        <Image indent={indent} src={content.image.fields.file.url} />
      )}
    </ContentWrapper>
  </div>
);

export default TimelineMoment;
