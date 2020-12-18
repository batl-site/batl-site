import React, { useEffect, useState } from "react"
import ContactForm from "../components/contact-form/contactForm"
import ContactHero from "../components/hero/contact/contactHero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sock from "../components/sock/sock"
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
    description: pageContent.description,
    images: pageContent.images ? pageContent.images : null
  } : null

  const formContent = pageContent.emailSubjects ? {
    subjectOptions: pageContent.emailSubjects,
    email: pageContent.email
  } : null

  const locationContent = pageContent.directionsHeader ? {
    header: pageContent.directionsHeader,
    car: pageContent.byCar,
    shuttle: pageContent.byShuttle,
    location: pageContent.location,
    imageSrc: pageContent.footerImage ? pageContent.footerImage.fields.file.url : null
  } : null

  return (
    <Layout>
      <SEO title="Contact" />
      {heroContent && <ContactHero content={heroContent} />}
      {formContent && <ContactForm content={formContent} />}
      {locationContent && <Sock content={locationContent} />}
    </Layout>
  )
}

export default Contact
