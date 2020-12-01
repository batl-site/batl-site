import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PRIMARY_GREY } from "../components/styles/styles";
import { WHATWEDO_ID } from "../constants/constants"
import apiService from "../service/apiService"
import WhatWeDoHero from "../components/whatWeDo-hero/hero/WhatWeDoHero"
import Education from "../components/education/education"


const WhatWeDo = () => {
  const [pageContent, setPageContent] = useState(null)

  useEffect(() => {
    apiService
      .getEntryByContentType(WHATWEDO_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  if (!pageContent) return null;

  const { hero, education } = pageContent;

  return (
    <Layout>
      <SEO title="What We Do" />
      <WhatWeDoHero content={hero.fields} />
      <Education content={education.fields} color={PRIMARY_GREY}/>
    </Layout>
  )
}

export default WhatWeDo