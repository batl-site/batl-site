
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HOMEPAGE_ID } from "../constants/constants";
import apiService from "../service/apiService";

const HomePage = () => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    apiService
      .getEntryByContentType(HOMEPAGE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  const heroContent = pageContent.homepageHero ? pageContent.homepageHero.fields : null

  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is the home page</h1>
      <h2>{heroContent && heroContent.heading}</h2>
      <p>{heroContent && heroContent.description}</p>

    </Layout>
  );
};

export default HomePage;