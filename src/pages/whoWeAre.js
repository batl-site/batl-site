import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WHOWEARE_ID } from "../constants/constants"
import apiService from "../service/apiService"

const WhoWeAre = () => {
  const [pageContent, setPageContent] = useState([])

  useEffect(() => {
    apiService
      .getEntryByContentType(WHOWEARE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  const heroContent = pageContent.hero ? pageContent.hero.fields : null

  return (
    <Layout>
      <SEO title="WhoWeAre" />
      <h1>This is the who we are page</h1>
      <h2>{heroContent && heroContent.heading}</h2>
      <p>{heroContent && heroContent.description}</p>
    </Layout>
  )
}

export default WhoWeAre
