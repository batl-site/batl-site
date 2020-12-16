import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { WHOWEARE_ID } from "../constants/constants";
import apiService from "../service/apiService";
import WhoWeAreHero from "../components/hero/whoWeAre/WhoWeAreHero";
import ColorBanner from "../components/color_banner/colorBanner";
import Team from "../components/team/team";

const WhoWeAre = () => {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    apiService
      .getEntryByContentType(WHOWEARE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  if (!pageContent) return null;

  const {
    hero,
    timelineDescription,
    timeline,
    timelineImage,
    teamSectionHeading,
    staff,
  } = pageContent;

  return (
    <Layout>
      <SEO title="Who We Are" />
      <WhoWeAreHero content={hero.fields} />
      <Team heading={teamSectionHeading} members={staff} />
      <ColorBanner
        section="Timeline"
        content={timelineDescription.fields}
        left
      />
    </Layout>
  );
};

export default WhoWeAre;
