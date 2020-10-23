import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import apiService from "../Service/apiService"

const IndexPage = () => {
  const [pageContent, setPageContent] = useState({})

  useEffect(() => {
    apiService.getEntryByContentType('staffMember')
      .then(response => setPageContent(response))
  }, [])

  console.log("this is pagecontent", pageContent)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>testing</h1>
      {pageContent.map((content) => (
        <div>
          <h2>{content.fields.name}</h2>
          <p>{content.fields.title}</p>
        </div>)
      )}
    </Layout>
  )
}

export default IndexPage
