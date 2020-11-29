import React from "react";
import SecondaryLink from "../../secondary_link/secondaryLink";
import { H3 } from "../../styles/styles";
import {
  ArticleImage,
  ImageContainer,
  ArticleSummary,
  SizeWrapper,
} from "./styled";

const Article = ({ content }) => {
  const imageSrc = content.thumbnail.fields.file.url;
  return (
    <SizeWrapper className="col-8 col-md-3 p-0 mb-5">
      <ImageContainer>
        <ArticleImage image={imageSrc}></ArticleImage>
      </ImageContainer>
      <H3>{content.title}</H3>
      <ArticleSummary>{content.summary}</ArticleSummary>
      <SecondaryLink content={{ url: content.url, label: "Read More" }} />
    </SizeWrapper>
  );
};

export default Article;
