import React from "react";
import { H1, H2 } from "../styles/styles";
import { Articles, NewsWrapper } from "./styled";
import Article from "./article/article";

const News = ({ content }) => {
  return (
    <NewsWrapper>
      <H2>News</H2>
      <H1>{content.heading}</H1>
      <Articles>
        {content.articles.map((article, i) => (
          <Article key={i} content={article.fields} />
        ))}
      </Articles>
    </NewsWrapper>
  );
};

export default News;
