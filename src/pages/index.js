
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import MissionStatement from "../components/mission/missionStatement";
import SEO from "../components/seo";
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
    imageSrc: pageContent.missionStatementImage.fields.file.url
  } : null

  return (
    <Layout>
      <SEO title="Home" />
      {missionContent && (<MissionStatement content={missionContent} />)}



    </Layout>
  );
};

export default HomePage;