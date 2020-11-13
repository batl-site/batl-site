
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import MissionStatement from "../components/mission/missionStatement";
import SEO from "../components/seo";
import { H1, H2, P1, P2 } from "../components/styles/styles";
import YellowColorBlock from "../components/yellowColorBlock/yellowColorBlock";
import { HOMEPAGE_ID } from "../constants/constants";
import apiService from "../service/apiService";

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const HomePage = () => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    apiService
      .getEntryByContentType(HOMEPAGE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  const missionContent = pageContent.missionStatementImage ? {
    statement: pageContent.missionStatement,
    description: pageContent.missionStatementDescription,
    imageSrc: pageContent.missionStatementImage.fields.file
  } : null
  const heroContent = pageContent.homepageHero ? pageContent.homepageHero.fields : null
  const YCBContent = pageContent.more ? pageContent.more.fields : null

  console.log(pageContent)

  return (
    <Layout>
      <SEO title="Home" />
      {missionContent && (<MissionStatement content={missionContent} />)}
      {YCBContent && <YellowColorBlock content={YCBContent}/>}


    </Layout>
  );
};

export default HomePage;