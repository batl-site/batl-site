import styled from "styled-components";
import { MIN_MOBILE_SIZE } from "../../constants/constants";

export const ColorSection = styled.div.attrs({
  className: "container-fluid my-5 py-5",
})`
  background-color: ${(props) => props.color};
`;

export const TwoColumn = styled.div.attrs({
  className: "d-none d-sm-block col-11 col-md-10 col-lg-8 col-xl-8",
})`
  column-count: 2;
  column-gap: 50px;
`;

export const OneColumn = styled.div.attrs({
  className: "d-block d-sm-none d-col-12",
})``;

export const AbsoluteContainer = styled.div`
  position: absolute;
`;

export const Header = styled.div`
  position: relative;
  top: -100px;

  padding: 0;

  @media (min-width: ${MIN_MOBILE_SIZE}) {
    padding: 0 15px;
  }
`;

export const Content = styled.div.attrs({ className: "container mt-5" })``;

export const ButtonText = styled.div`
  margin: 0;
  padding: 15px 25px;
`;

export const Container = styled.div.attrs({ className: "container" })``;
