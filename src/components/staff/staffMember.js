import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { H2 } from "../styles/styles";
import { Bio, Container, Group, Headshot, Image, Sprinkle } from "./styled";

const StaffMember = ({ content, color }) => {
  return (
    <Container>
      <Group>
        <Headshot>
          <Image src={content.headshot.fields.file.url} />
          <Sprinkle src={color} />
        </Headshot>
        <H2>{content.name}</H2>
        <H2>{content.title}</H2>
      </Group>
      <Bio>{documentToReactComponents(content.richBiography)}</Bio>
    </Container>
  );
};

export default StaffMember;
