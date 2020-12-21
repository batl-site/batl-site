import React from "react";
import { H2, P1, RoundImage } from "../../styles/styles";
import {
  ContentWrapper,
  Indent,
  Dot,
  Content,
  Title,
  Graphic,
  Sprinkle,
  Image,
  MobileImageContainer,
  SizeContainer,
  MobileImage,
  MobileSprinkle,
} from "./styled";

const TimelineMoment = ({ indent, content, sprinkle }) => (
  <div>
    {content.image && (
      <MobileImageContainer indent={indent}>
        <MobileSprinkle indent={indent} src={sprinkle} />
        <SizeContainer>
          <MobileImage src={content.image.fields.file.url} />
        </SizeContainer>
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
        <Graphic indent={indent}>
          <Sprinkle indent={indent} src={sprinkle} />
          <Image src={content.image.fields.file.url} />
        </Graphic>
      )}
    </ContentWrapper>
  </div>
);

export default TimelineMoment;
