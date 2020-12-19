import styled from "styled-components";
import { MIN_LG_DESKTOP_SIZE } from "../../../../constants/constants";
import { RoundImage } from "../../../styles/styles";

export const MediumImage = styled(RoundImage).attrs({
  className: "col-8",
})`
  position: relative;
`;

export const ImageContainer = styled.div.attrs({
  className: "col-4",
})`
  float: right;
`;

export const RowOne = styled.div.attrs({
  className: "row justify-content-end",
})`
  position: relative;
  right: -100px;
`;

export const RowTwo = styled.div.attrs({
  className: "row",
})`
  position: relative;
  right: 10px;
  bottom: 50px;
`;

export const RowThree = styled.div.attrs({
  className: "row justify-content-end",
})`
  position: relative;
  bottom: 50px;
  right: -34px;
`;
