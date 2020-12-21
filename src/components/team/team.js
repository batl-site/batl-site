import React from "react";
import { navigate } from "gatsby";
import { Container, ButtonContainer, CTA } from "./styled";
import { H1, H2, P2 } from "../styles/styles";
import StaffMember from "../staff/staffMember";
import Navy from "../../images/sprinkles/outlined-navy-large.svg";
import Green from "../../images/sprinkles/outlined-green-large.svg";
import Yellow from "../../images/sprinkles/outlined-yellow-large.svg";

const Team = ({ heading, members }) => {
  const colors = [Navy, Green, Yellow];

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
