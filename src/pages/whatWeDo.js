import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PRIMARY_GREY } from "../components/styles/styles";
import { WHATWEDO_ID } from "../constants/constants"
import apiService from "../service/apiService"
import WhatWeDoHero from "../components/hero/whatWeDo/whatWeDoHero"
import Education from "../components/education/education"
import RegulatoryPartners from "../components/regulatory_partners/regulatoryPartners"
import ColorBannerWhatWeDo from "../components/color_Banner_WhatWeDo/colorBannerWhatWeDo"
import Research from "../components/research/research"
import BottomImage from "../components/bottom_image/bottomImage"
import IndustryPartners from "../components/industry_partners/industryPartners"

const WhatWeDo = () => {
  const [pageContent, setPageContent] = useState(null)

  useEffect(() => {
    apiService
      .getEntryByContentType(WHATWEDO_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  if (!pageContent) return null;

  const { 
    hero, 
    education, 
    industryPartnersBanner, 
    research, 
    regulatoryPartners,
    industryPartners, 
    bottomImage } = pageContent;

  return (
    <Layout>
      <SEO title="What We Do" />
      <WhatWeDoHero content={hero.fields} />
      <RegulatoryPartners content={regulatoryPartners} />
      <ColorBannerWhatWeDo content={industryPartnersBanner.fields} section={'Industry Parnterships'} />
      <IndustryPartners content={industryPartners} color={PRIMARY_GREY} />
      <Research id="research" section="Use-Inspired Research" content={research.fields} />
      <BottomImage content={bottomImage} />
    </Layout>
  )
}

export default WhatWeDo