import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MD_DESKTOP_SIZE,
  MIN_SM_DESKTOP_SIZE,
} from "../../../constants/constants";
import { PRIMARY_NAVY } from "../../styles/styles";

export const HpHeroContainer = styled.div.attrs({
  classname: "d-flex flex-column",
})`
  margin-bottom: 150px;
`;

export const HeroImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const HeroImageContainer = styled.div.attrs({
  className: "container-fluid p-0",
})`
  height: 80vh;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    height: 70vh;
  }
`;

export const Container = styled.div.attrs({ className: "container p-0" })``;

export const ColorBlock = styled.div.attrs({
  className: "col-10 col-md-6 col-lg-5 py-5",
})`
  background-color: ${PRIMARY_NAVY};
  color: white;
  padding-left: 0;

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    padding-left: 10% !important;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    padding-left: 17% !important;
  }
`;

export const ColorOverlay = styled.div.attrs({
  className: "container-fluid position-absolute p-0",
})`
  bottom: 25vh;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    bottom: 25vh;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    bottom: 35vh;
  }
`;
