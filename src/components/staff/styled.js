import styled from "styled-components";
import { P1, RoundImage } from "../styles/styles";

export const Container = styled.div.attrs({ className: "row" })`
  margin: 5em 0;
`;

export const Group = styled.div.attrs({ className: "col-12 col-lg-3" })`
  text-align: center;
`;

export const Headshot = styled.div.attrs({
  className: "col-8 col-md-4 col-lg-12",
})`
  margin: auto;
  margin-bottom: 1.45rem;
`;

export const Image = styled(RoundImage)`
  margin-bottom: 0;
`;

export const Bio = styled(P1).attrs({
  className: "d-none d-md-block col-12 col-lg-8 pl-lg-4",
})``;

export const Sprinkle = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.color};
  height: 100%;
  width: calc(100% - 30px);
  position: absolute;
  top: 0;
  left: 0px;
`;
