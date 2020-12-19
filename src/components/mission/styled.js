import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";
import { P1 } from "../styles/styles";

export const ImageWrapper = styled.div.attrs({ className: "mb-5" })`
  float: right;
  padding: 0 !important;
  width: 80vw;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export const Description = styled.div.attrs({
  className: "col-12 col-md-6 col-lg-4 mb-4 pr-4",
})`
  padding: 0 !important;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    padding-left: 8vw !important;
  }

  @media (min-width: 1440px) {
    padding-left: 11.5vw !important;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    padding-left: 0 !important;
  }
`;

export const BleedBreakPoint = styled.div`
  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Content = styled.div.attrs({
  className: "d-none d-md-inline-flex",
})`
  justify-content: space-between;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    max-width: 1140px;
    width: 100%;
    margin-right: auto !important;
    margin-left: auto !important;
  }
`;

export const ContentDescription = styled(P1).attrs({ className: "pr-3" })``;

export const Container = styled.div.attrs({ className: "container" })``;

export const FlexWrapper = styled.div.attrs({
  className: "d-flex flex-column my-5",
})`
margin: 5% 0;
`;
