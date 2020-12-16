import React from "react";
import { H2 } from "../styles/styles";
import { Container, Group, Headshot, Bio } from "./styled";

const StaffMember = ({ content }) => {
  return (
    <Container>
      <Group>
        <Headshot src={content.headshot.fields.file.url} />
        <H2>{content.name}</H2>
        <H2>{content.title}</H2>
      </Group>
      <Bio>{content.biography}</Bio>
    </Container>
  );
};

export default StaffMember;
