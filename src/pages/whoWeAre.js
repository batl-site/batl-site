import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { WHOWEARE_ID } from "../constants/constants";
import apiService from "../service/apiService";
import WhoWeAreHero from "../components/hero/whoWeAre/WhoWeAreHero";
import ColorBanner from "../components/color_banner/colorBanner";
import Team from "../components/team/team";
import Timeline from "../components/timeline/timeline";

const init = {
  hero: null,
  teamSectionHeading: null,
  staff: null,
  timelineDescription: null,
  timeline: null,
  timelineImage: null,
};

const WhoWeAre = () => {
  const [pageContent, setPageContent] = useState(init);

  useEffect(() => {
    apiService
      .getEntryByContentType(WHOWEARE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  const {
    hero,
    teamSectionHeading,
    staff,
    timelineDescription,
    timeline,
    timelineImage,
  } = pageContent;

  return (
    <Layout>
      <SEO title="Who We Are" />
      {hero && <WhoWeAreHero content={hero.fields} />}
      {teamSectionHeading && staff && (
        <Team heading={teamSectionHeading} members={staff} />
      )}
      {timelineDescription && (
        <ColorBanner
          section="Timeline"
          content={timelineDescription.fields}
          left
        />
      )}
      {timeline && timelineImage && (
        <Timeline moments={timeline} image={timelineImage.fields.file.url} />
      )}
    </Layout>
  );
};

export default WhoWeAre;
