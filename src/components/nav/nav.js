import { Link } from "gatsby";
import React from "react";
import { LogoContainer, NavContainer, NavItem, NavPages } from "./styled";

const Nav = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <NavContainer
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <LogoContainer>
        <Link to="/">
          <NavItem>Logo</NavItem>
        </Link>
      </LogoContainer>
      <NavPages>
        <Link to="/whoWeAre">
          <NavItem>Who We Are</NavItem>
        </Link>
        <Link to="/whatWeDo">
          <NavItem>What We Do</NavItem>
        </Link>
        <Link to="/contact">
          <NavItem>Contact</NavItem>
        </Link>
      </NavPages>
    </NavContainer>
  </header>
);

export default Nav;