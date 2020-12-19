import React from "react";
import { H2 } from "../styles/styles";
import { Container, Group, Headshot, Image, Bio, Sprinkle } from "./styled";

const StaffMember = ({ content, color }) => {
  return (
    <Container>
      <Group>
        <Headshot>
          <Image src={content.headshot.fields.file.url} />
          <Sprinkle color={color} />
        </Headshot>
        <H2>{content.name}</H2>
        <H2>{content.title}</H2>
      </Group>
      <Bio>{content.biography}</Bio>
    </Container>
  );
};

export default StaffMember;
