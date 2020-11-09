
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { H1, H2, P1, P2 } from "../components/styles/styles";
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

      <H1>This is h1 -- Work sans</H1>
      <H2>This is h2 -- Open sans italic</H2>
      <P1>This is p1 -- Open sans regular</P1>
      <P2>This is p2 -- IBM Plex Sans semibold</P2>



    </Layout>
  );
};

export default HomePage;