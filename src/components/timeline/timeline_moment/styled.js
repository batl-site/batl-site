import styled from "styled-components";
import { TEXT_BLACK, H3, RoundImage } from "../../styles/styles";
import { MIN_SM_DESKTOP_SIZE } from "../../../constants/constants";

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5em;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-bottom: 15em;
  }
`;

export const Indent = styled.div.attrs((props) => ({
  className: `col-1 ${props.size == 1 ? "col-md-3" : "col-md-6"}`,
}))`
  border-top: 1px dashed ${TEXT_BLACK};
  margin-top: ${(props) => (props.dateExists ? "48px" : "9px")};

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-top: ${(props) => (props.dateExists ? "54px" : "13px")};
  }
`;

export const Dot = styled.span`
  background-color: ${TEXT_BLACK};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  top: -6px;
  right: 0px;
  position: absolute;
`;

export const Content = styled.div.attrs({ className: "col-10 col-md-5" })``;

export const Title = styled(H3)`
  margin-bottom: 1.5em;
`;

export const Image = styled(RoundImage).attrs({
  className: "d-none d-md-block col-4 position-absolute",
})`
  ${(props) => (props.indent === 1 ? "right" : "left")}: 0;
`;

export const MobileImageContainer = styled.div.attrs({
  className: "d-md-none row",
})`
  flex-direction: ${(props) => (props.indent === 1 ? "row-reverse" : "row")};
`;

export const MobileImage = styled(RoundImage).attrs({ className: "col-8" })``;
