import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
  MIN_MD_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
} from "../../constants/constants";
import { H1, PRIMARY_GREY, TEXT_BLACK } from "../styles/styles";

export const ColorWrapper = styled.div.attrs({
  className: "container-fluid col-11 my-5",
})`
  background-color: ${PRIMARY_GREY};
`;

export const Container = styled.div.attrs({ className: "container py-5" })`
  color: ${TEXT_BLACK};
`;

export const QuotationMark = styled(H1)`
  font-size: 96px;
  margin-bottom: -20px;
`;
export const SprinkleContainer = styled.div`
  position: relative;
`;

export const Sprinkle = styled.img.attrs({ className: "" })`
  position: absolute;
  width: 80%;
  right: 9px;
  bottom: -1px;
  z-index: -1;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    width: 60%;
    right: 17px;
    bottom: -19px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    width: 50%;
    right: 35px;
    bottom: -20px;
  }

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    width: 800px;
    right: 39px;
    bottom: -53px;
  }
`;
