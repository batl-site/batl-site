import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WHATWEDO_ID } from "../constants/constants";
import apiService from "../service/apiService";

const WhatWeDo = () => {

  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    apiService
      .getEntryByContentType(WHATWEDO_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  console.log(pageContent)

  return (
    <Layout>
      <SEO title="WhatWeDo" />
      <h1>This is the what we do page</h1>
    </Layout>
  )
}

export default WhatWeDo
