import React, { useEffect, useState } from "react"
import ContactHero from "../components/hero/contact/contactHero"
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

  console.log(pageContent)

  const heroContent = pageContent.pageHeading ? {
    heading: pageContent.pageHeading,
    description: pageContent.description
  } : null

  const formContent = pageContent.emailSubjects ? {
    subjectOptions: pageContent.emailSubjects
  } : null

  const locationContent = pageContent.directionsHeader ? {
    header: pageContent.directionsHeader,
    car: pageContent.byCar,
    shuttle: pageContent.byShuttle,
    location: pageContent.location
  } : null

  return (
    <Layout>
      <SEO title="Contact" />
      {heroContent && <ContactHero content={heroContent} />}
    </Layout>
  )
}

export default Contact
