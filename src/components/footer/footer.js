import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import apiService from "../../service/apiService";
import {
  FOOTER_ID,
  HOMEPAGE_LINK,
  WHOWEARE_LINK,
  WHATWEDO_LINK,
  CONTACT_LINK,
} from "../../constants/constants";
import {
  ColorBlock,
  Container,
  BigColumn,
  Headline,
  Row,
  HalfRow,
  FooterLink,
  SmallColumn,
  Icons,
  Icon,
  CTA,
  Logo,
} from "./styled";
import { P1, P2 } from "../styles/styles";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import LinkedIn from "../../images/linkedin.png";
import BATL from "../../images/batl-white.png";
import COS from "../../images/cos.png";

const Footer = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    apiService
      .getEntryByContentType(FOOTER_ID)
      .then((response) => setContent(response[0].fields));
  }, []);

  const {
    headline,
    address,
    city,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
    contactButtonLabel,
    contactButtonText,
  } = content;

  return (
    <ColorBlock>
      <Container>
        <Row>
          <BigColumn>
            <Headline>{headline}</Headline>
            <Row>
              <HalfRow>
                <P1>{address}</P1>
                <P1>{city}</P1>
              </HalfRow>
              <HalfRow>
                <P1>
                  <FooterLink to={HOMEPAGE_LINK}>Home</FooterLink>
                </P1>
                <P1>
                  <FooterLink to={WHOWEARE_LINK}>Who We Are</FooterLink>
                </P1>
                <P1>
                  <FooterLink to={WHATWEDO_LINK}>What We Do</FooterLink>
                </P1>
                <P1>
                  <FooterLink to={CONTACT_LINK}>Contact</FooterLink>
                </P1>
              </HalfRow>
            </Row>
          </BigColumn>
          <SmallColumn>
            <Row>
              <Icons>
                <a href={facebookUrl}>
                  <Icon src={Facebook} />
                </a>
                <a href={instagramUrl}>
                  <Icon src={Instagram} />
                </a>
                <a href={linkedinUrl}>
                  <Icon src={LinkedIn} />
                </a>
              </Icons>
            </Row>
            <P1>{contactButtonLabel}</P1>
            <CTA onClick={() => navigate(CONTACT_LINK)}>
              <P2>{contactButtonText}</P2>
            </CTA>
          </SmallColumn>
        </Row>
        <Row>
          <BigColumn>
            <Row>
              <HalfRow>
                <Logo src={BATL} />
              </HalfRow>
              <HalfRow>
                <Logo src={COS} />
              </HalfRow>
            </Row>
          </BigColumn>
          <SmallColumn>
            <P1>Made with &hearts; by Scout</P1>
          </SmallColumn>
        </Row>
      </Container>
    </ColorBlock>
  );
};

export default Footer;
