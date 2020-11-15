import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WHATWEDO_ID } from "../constants/constants"
import apiService from "../service/apiService"
import Partner from "../components/partners/partner"


const WhatWeDo = () => {
  const [pageContent, setPageContent] = useState(null)

  useEffect(() => {
    apiService
      .getEntryByContentType(WHATWEDO_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  if (!pageContent) return null;

  const partnerContent = pageContent.industryHeading ? pageContent.industryHeading.fields : null

  console.log(pageContent)
  console.log(partnerContent)
  return (
    <Layout>
      <SEO title="What We Do" />
      {partnerContent && <Partner content={partnerContent}/>}
      
    </Layout>
  )
}

export default WhatWeDo
