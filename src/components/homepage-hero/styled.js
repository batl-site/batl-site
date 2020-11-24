import styled from "styled-components";
import { PRIMARY_YELLOW } from "../styles/styles";
import { OVERLAY_ZINDEX } from "../../constants/constants";

export const HpHeroContainer = styled.div.attrs({
  classname: "d-flex flex-column",
})`
  margin-bottom: 25vh;
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
  height: 70vh;

  @media (min-width: 1550px) {
    height: 60vh;
  }
`;

export const HeroBlockOverlay = styled.div.attrs({
  className: "col-11 col-md-7 position-relative",
})`
  background-color: ${PRIMARY_YELLOW};

  z-index: ${OVERLAY_ZINDEX};
  padding: 60px !important;
  overflow: hidden;
  bottom: 40vh;

  @media (min-width: 1550px) {
    top: -35vh;
  }
`;

export const HeroBlockPosition = styled.div.attrs({
  className: "position-absolute",
})`
  margin-left: -60px;
`;

export const Container = styled.div.attrs({ className: "container" })``;
