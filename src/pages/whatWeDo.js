import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonial from "../components/testimonial/testimonial";
import { WHATWEDO_ID } from "../constants/constants";
import apiService from "../service/apiService";

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const WhatWeDo = () => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    apiService
      .getEntryByContentType(WHATWEDO_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  
  const testimonialContent = pageContent.testimonial ? pageContent.testimonial.fields : null



  return (
    <Layout>
      <SEO title="Home" />
      {testimonialContent && <Testimonial content={testimonialContent} />}



    </Layout>
  );
};

export default WhatWeDo;
