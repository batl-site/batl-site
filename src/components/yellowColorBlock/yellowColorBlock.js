import React from "react";
import { Button, H1, P1, P2 } from "../styles/styles";
import {
  ColorSection,
  TwoColumnContainer,
  HeaderContainer,
  OneColumnContainer,
  ContentContainer,
} from "./styled";

const YellowColorBlock = ({ content }) => {
  console.log(content);
  return (
    <ColorSection className="container-fluid">
      <div className="container position-relative">
        <HeaderContainer className="col-10 col-md-8 col-lg-6 col-xl-4">
          <H1>{content.heading}</H1>
        </HeaderContainer>
      </div>
      <ContentContainer className="container">
        <OneColumnContainer className="d-block d-sm-none d-col-12">
          <P1>{content.description}</P1>
        </OneColumnContainer>
        <Button className="mt-4 d-block d-sm-none"><P2 className="m-0 px-4 py-2">Get to know us more</P2></Button>
        <TwoColumnContainer className="d-none d-sm-block col-11 col-md-10 col-lg-8 col-xl-8 ">
          <P1 >{content.description}</P1>
          <Button className="mt-4"><P2 className="m-0 px-4 py-2">Get to know us more</P2></Button>
        </TwoColumnContainer>
      </ContentContainer>
    </ColorSection>
  );
};

export default YellowColorBlock;
