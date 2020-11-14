
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { H1, H2, P1, P2 } from "../components/styles/styles";
import Testimonial from "../components/testimonial/testimonial";
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

  const heroContent = pageContent.homepageHero ? pageContent.homepageHero.fields : null
  const testimonialContent = pageContent.testimonial ? pageContent.testimonial.fields : null

  console.log(pageContent)

  return (
    <Layout>
      <SEO title="Home" />
      {testimonialContent && <Testimonial content={testimonialContent} />}



    </Layout>
  );
};

export default HomePage;