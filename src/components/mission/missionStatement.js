import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import DotGrid from "../../images/sprinkles/dot-grid.svg";
import { H1, H2, P1 } from "../styles/styles";
import {
  BleedBreakPoint,
  Container,
  Content,
  ContentDescription,
  Description,
  FlexWrapper,
  ImageWrapper,
  Sprinkle,
  SprinkleWrapper,
} from "./styled";

const MissionStatement = ({ content }) => {
  return (
    <>
      <FlexWrapper>
        <Container>
          <H2>Our Vision</H2>
          <H1>{content.statement}</H1>
          <Description className="d-block d-md-none">
            <P1>{documentToReactComponents(content.richDescription)}</P1>
          </Description>
        </Container>
        <BleedBreakPoint>
          <Content>
            <Description className="col-xl-4">
              <ContentDescription>
                {documentToReactComponents(content.richDescription)}
              </ContentDescription>
            </Description>
            <ImageWrapper className="col-xl-7">
              <img alt={content.imageSrc.fileName} src={content.imageSrc.url} />
            </ImageWrapper>
          </Content>
        </BleedBreakPoint>
        <ImageWrapper className="d-block d-md-none mb-5 align-self-end">
          <img alt={content.imageSrc.fileName} src={content.imageSrc.url} />
        </ImageWrapper>
        <SprinkleWrapper>
          <Sprinkle src={DotGrid} />
        </SprinkleWrapper>
      </FlexWrapper>
    </>
  );
};

export default MissionStatement;
