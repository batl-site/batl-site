import styled from "styled-components";
import { MIN_SM_DESKTOP_SIZE, 
  MIN_MD_DESKTOP_SIZE, 
  MIN_TABLET_SIZE,
  OVERLAY_ZINDEX } from '../../constants/constants'

export const Images = styled.div.attrs({
  className: "col-12 p-0 d-flex row",
})`
  justify-content: space-between;
  flex-wrap: wrap;

`;

export const ImageWrapper = styled.div.attrs({ className: "container my-5" })`
`;

export const ColorSection = styled.div.attrs({
    className: "container my-5 py-5",
})`
    background-color: ${(props) => props.color};
`;
  
export const Sprinkle = styled.img`
  position: absolute;
  right: 0;
  width: 40px;
  z-index: ${OVERLAY_ZINDEX};

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    width: 68px;
  }

  @media (min-width: ${MIN_MD_DESKTOP_SIZE}) {
    width: 68px;
    right: 107px;
  }
`;