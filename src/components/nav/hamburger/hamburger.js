import React, { useState } from "react";
import { CONTACT_LINK, HOMEPAGE_LINK, WHATWEDO_LINK, WHOWEARE_LINK } from "../../../constants/constants";
import {
  HamburgerContainer,
  Bar,
  XBar,
  HamburgerMenu,
  MenuContainer,
  MenuContentContainer,
  HambHeaderLink,
  HambHeaderPage,
  HambLinkContainer,
} from "./styled";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <HamburgerContainer onClick={toggle}>
      {renderStep(isOpen)}
    </HamburgerContainer>
  );
};

function renderStep(isOpen) {
  if (!isOpen) {
    return (
      <HamburgerMenu className="d-block d-md-none">
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </HamburgerMenu>
    );
  } else {
    return (
      <MenuContainer className="d-flex d-md-none">
        <HamburgerMenu>
          <XBar leftBar="true"></XBar>
          <XBar></XBar>
        </HamburgerMenu>
        <MenuContentContainer>
          <HambLinkContainer>
            <HambHeaderLink to={HOMEPAGE_LINK}>
              <HambHeaderPage>Home</HambHeaderPage>
            </HambHeaderLink>
            <HambHeaderLink to={WHOWEARE_LINK}>
              <HambHeaderPage>Who We Are</HambHeaderPage>
            </HambHeaderLink>
            <HambHeaderLink to={WHATWEDO_LINK}>
              <HambHeaderPage>What We Do</HambHeaderPage>
            </HambHeaderLink>
            <HambHeaderLink to={CONTACT_LINK}>
              <HambHeaderPage>Contact</HambHeaderPage>
            </HambHeaderLink>
          </HambLinkContainer>
        </MenuContentContainer>
      </MenuContainer>
    );
  }
}

export default Hamburger;
