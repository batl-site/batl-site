import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WHOWEARE_ID } from "../constants/constants"
import apiService from "../service/apiService"
import ImageInfoSection from "../components/image_info_section/imageInfoSection"

const WhoWeAre = () => {
  const [pageContent, setPageContent] = useState(null)

  useEffect(() => {
    apiService
      .getEntryByContentType(WHOWEARE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  if (!pageContent) return null;

  const { mission } = pageContent;

  return (
    <Layout>
      <SEO title="Who We Are" />
      <ImageInfoSection section="Our Mission" content={mission.fields} />
    </Layout>
  )
}

export default WhoWeAre
