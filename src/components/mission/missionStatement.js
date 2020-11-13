import { Link } from "gatsby";
import React from "react";
import { H1, H2, P1 } from "../styles/styles";
import {
  DescriptionContainer,
  ImageContainer,
  MissionImage,
} from "./styled";

const MissionStatement = ({ content }) => {
  console.log("this is missioncontent", content);

  return (
    <div>
      <div className="container">
        <H2>Our Vision</H2>
        <H1 className="header-spacing">{content.statement}</H1>
      </div>
      <div className="d-inline-flex justify-content-between container-fluid  no-gutters p-0">
        <DescriptionContainer className="col-12 col-md-6 col-lg-4 ">
          <P1>{content.description}</P1>
        </DescriptionContainer>
        <ImageContainer className="float-right  ">
          <MissionImage src={content.imageSrc} />
        </ImageContainer>
      </div>
    </div>
  );
};

export default MissionStatement;
