import React from "react";
import { navigate } from "gatsby";
import { Container, ButtonContainer, CTA } from "./styled";
import {
  H1,
  H2,
  P2,
  PRIMARY_NAVY,
  PRIMARY_GREEN,
  PRIMARY_YELLOW,
} from "../styles/styles";
import StaffMember from "../staff/staffMember";

const Team = ({ heading, members }) => {
  const colors = [PRIMARY_NAVY, PRIMARY_GREEN, PRIMARY_YELLOW];

  return (
    <Container>
      <H2>Our Team</H2>
      <H1>{heading}</H1>
      {members.map((member, i) => (
        <StaffMember
          key={member.sys.id}
          content={member.fields}
          color={colors[i % 3]}
        />
      ))}
      <ButtonContainer>
        <CTA onClick={() => navigate("/contact")}>
          <P2>Contact Us</P2>
        </CTA>
      </ButtonContainer>
    </Container>
  );
};
export default Team;
