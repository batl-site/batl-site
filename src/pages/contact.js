import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CONTACT_ID } from "../constants/constants"
import apiService from "../service/apiService"

const Contact = () => {
  const [pageContent, setPageContent] = useState([])

  useEffect(() => {
    apiService.getEntryByContentType(CONTACT_ID)
      .then(response => setPageContent(response[0].fields));
  }, [])

  const headingContent = pageContent.contactOpener ? pageContent.contactOpener.fields : null

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>This is the contact page</h1>
      <h2>{headingContent && headingContent.header}</h2>
      <p>{headingContent && headingContent.description}</p>
    </Layout>
  )
}

export default Contact
