import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PRIMARY_GREY } from "../components/styles/styles";
import { WHATWEDO_ID } from "../constants/constants"
import apiService from "../service/apiService"
import WhatWeDoHero from "../components/hero/whatWeDo/whatWeDoHero"
import Education from "../components/education/education"
import RegulatoryPartners from "../components/regulatory_partners/regulatoryPartners"
import BottomImage from "../components/bottom_image/bottomImage"
import IndustryPartners from "../components/industry_partners/industryPartners"
import ColorBanner from '../components/color_banner/colorBanner'
import ImageInfoSection from "../components/image_info_section/imageInfoSection";

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
    bottomImage 
  } = pageContent;
    
  return (
    <Layout>
      <SEO title="What We Do" />
      <WhatWeDoHero content={hero.fields} />
      <Education content={education.fields} color={PRIMARY_GREY} />
      <RegulatoryPartners content={regulatoryPartners} />
      <ColorBanner content={industryPartnersBanner.fields} section={'Industry Parnterships'}/>
      <IndustryPartners content={industryPartners} color={PRIMARY_GREY} />
      <ImageInfoSection id="research" section="Use-Inspired Research" variant='true' content={research.fields} />
      <BottomImage content={bottomImage} />
    </Layout>
  )
}

export default WhatWeDo