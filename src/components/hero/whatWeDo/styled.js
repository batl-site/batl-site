import styled from "styled-components";
import {
    MIN_LG_DESKTOP_SIZE,
    MIN_MOBILE_SIZE,
    MIN_SM_DESKTOP_SIZE,
    MIN_TABLET_SIZE,
} from "../../../constants/constants";
import { PRIMARY_NAVY } from "../../styles/styles";

export const ColorBlock = styled.div`
  color: white;
  background-color: ${PRIMARY_NAVY};
  position: relative;
  margin-bottom: 10%;
`;

export const Container = styled.div`
  padding: 15px 0;
  position: relative;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding: 55px 0;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {  
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const ContentContainer = styled.div.attrs({
    className: "col-md-6 col-lg-5",
})`
  @media (min-width: ${MIN_TABLET_SIZE}) {
    left: 50%;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {  
    max-width: 960px;
    margin: 0 auto;
    left: 30%;
  }
`;

export const SideImage = styled.img`
  display: none;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    display: block;
  }

  margin-bottom: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: -75px;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    display: none;
  }
`;

export const XLImage = styled.img`
  display: none;
  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    display: block;
    margin-bottom: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    position: absolute;

    bottom: -75px;
  }
`;

export const FullBleedImage = styled.img.attrs({ className: "d-md-none" })`
  margin-bottom: 0;
`;
