import styled from "styled-components";
import { MIN_TABLET_SIZE } from "../../../constants/constants";

export const PartnerImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ImageContainer = styled.div`
  height: 100px;
  margin-bottom: 25px;
  width: 65%;
  margin: auto;

  @media (min-widht: ${MIN_TABLET_SIZE}) {
    width: 50%;
  }
`;

export const SizeWrapper = styled.div.attrs({
  className: "col-md-2 col-5 p-0 mb-5",
})``;
