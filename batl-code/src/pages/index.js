import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import apiService from "../Service/apiService"

const IndexPage = () => {

  const [pageContent, setPageContent] = useState({})


  useEffect(() => {
    apiService.findAllData().then((response) => 
      setPageContent(response.items[0].fields)
    )
  }, [])

  console.log(pageContent.heading1)
 
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{pageContent.heading1}</h1>
      <h3>{pageContent.subheading1}</h3>
      <p>{pageContent.paragraph1.content[0].content[0].value}</p>
    </Layout>
  )
}

export default IndexPage
