import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WHATWEDO_ID } from "../constants/constants"
import apiService from "../service/apiService"
import ImageInfoSection from "../components/image_info_section/imageInfoSection"

const WhatWeDo = () => {
  const [pageContent, setPageContent] = useState(null)

  useEffect(() => {
    apiService
      .getEntryByContentType(WHATWEDO_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  if (!pageContent) return (
    <Layout>
      <SEO title="Who We Are" />
    </Layout>
  ) ;

  const { research } = pageContent;
 

  return (
    <Layout>
      <SEO title="Who We Are" />
      <ImageInfoSection section="Use-Inspired Research" content={research.fields} />
    </Layout>
  )
}

export default WhatWeDo
