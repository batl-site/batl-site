import React from "react";
import { H2, P1 } from "../../styles/styles";
import {
  Container,
  ContentWrapper,
  Indent,
  Dot,
  Content,
  Title,
  RightImage,
  LeftImage,
  MobileImage,
} from "./styled";

const TimelineMoment = ({ indent, content }) => (
  <Container>
    {content.image && (
      <MobileImage indent={indent} src={content.image.fields.file.url} />
    )}
    <ContentWrapper>
      <Indent dateExists={content.date} size={indent}>
        <Dot />
      </Indent>
      <Content>
        {content.date && <H2>{content.date}</H2>}
        <Title>{content.title}</Title>
        <P1>{content.description}</P1>
      </Content>
      {content.image &&
        (indent === 1 ? (
          <RightImage src={content.image.fields.file.url} />
        ) : (
          <LeftImage src={content.image.fields.file.url} />
        ))}
    </ContentWrapper>
  </Container>
);

export default TimelineMoment;
