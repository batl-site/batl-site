import styled from "styled-components";
import { MIN_SM_DESKTOP_SIZE, MIN_MD_DESKTOP_SIZE, MIN_TABLET_SIZE } from '../../constants/constants'

export const Images = styled.div.attrs({
  className: "col-12 p-0 d-block d-sm-flex",
})`
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${MIN_TABLET_SIZE}) {
    left: 35px;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    left: 70px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    left: 105px;
  }
`;

export const ImageWrapper = styled.div.attrs({ className: "container my-5" })`
`;

export const ColorSection = styled.div.attrs({
    className: "container my-5 py-5",
})`
    background-color: ${(props) => props.color};
`;
  