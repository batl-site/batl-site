import styled from "styled-components";
import {
    MIN_LG_DESKTOP_SIZE,
  MIN_MOBILE_SIZE,
  MIN_SM_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";

import { H2, PRIMARY_GREY, TEXT_BLACK } from "../styles/styles";

export const ColorWrapper = styled.div.attrs({ className: "container-fluid" })`
  background-color: ${PRIMARY_GREY};
  margin-top: 200px;
`;

export const Container = styled.div.attrs({ className: "container py-4" })`
  color: ${TEXT_BLACK};
`;

export const Name = styled.div`
  text-transform: uppercase;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
`;

export const Header = styled.div`
  position: relative;
  top: -50px;

  padding: 0;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    top: -67px;
  }

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding: 0 15px;
  }
`;

export const Content = styled.div.attrs({
  className: "col-12 d-block d-lg-flex justify-content-between p-0",
})``;

export const ContentSection = styled.div.attrs({
  className: "col-12 col-lg-4 mb-5",
})``;

export const ContentSectionSmall = styled.div.attrs({
  className: "col-12 col-lg-3 mb-5",
})``;

export const SectionTitle = styled(H2)`
  margin-bottom: 5px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-bottom: 45px;
  }
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
  height: 300px;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    height: 400px;
  }
`;

export const Line = styled.div`
  border-top: 1px solid #000;
`

export const ContainerLine = styled.div`
  border-left: 1px solid #000;
`
