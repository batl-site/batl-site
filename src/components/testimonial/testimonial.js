import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  BleedBreakPoint,
  Content,
  Description,
  ImageWrapper
} from "./styled";

const Testimonial = ({ content }) => {
  return (
    <>
      <div className="container">
        <H2>Our Vision</H2>
        <H1>{content.statement}</H1>
        <Description className="d-block d-md-none col-12 col-md-6 col-lg-4">
          <P1>{content.description}</P1>
        </Description>
      </div>
      <BleedBreakPoint>
        <Content className="d-none d-md-inline-flex">
          <Description className="col-12 col-md-6 col-lg-4 col-xl-5 mr-4">
            <P1>{content.description}</P1>
          </Description>
          <ImageWrapper className="col-xl-7">
            <img alt={content.imageSrc.fileName} src={content.imageSrc.url} />
          </ImageWrapper>
        </Content>
      </BleedBreakPoint>
      <ImageWrapper className="d-block d-md-none">
        <img alt={content.imageSrc.fileName} src={content.imageSrc.url} />
      </ImageWrapper>
    </>
  );
};

export default Testimonial;