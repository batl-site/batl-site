import { Link, navigate } from "gatsby";
import React from "react";
import { LogoContainer, NavContainer, NavItem, NavPages, Logo, NavButton } from "./styled";
import * as logo from "../../images/batl-logo.svg";
import { P1 } from "../styles/styles";

const Nav = () => (
  <header>
    <NavContainer>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <NavPages className="col-8 col-lg-6">
        <Link to="/whoWeAre" className="text-decoration-none">
          <NavItem><P1>Who We Are</P1></NavItem>
        </Link>
        <Link to="/whatWeDo" className="text-decoration-none">
          <NavItem><P1>What We Do</P1></NavItem>
        </Link>
        <NavButton onClick={() => navigate("/contact")}>
          <P1>Contact</P1>
        </NavButton>
      </NavPages>
    </NavContainer>
  </header>
);

export default Nav;