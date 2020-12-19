import styled from "styled-components";
import {
  MIN_LG_DESKTOP_SIZE,
} from "../../constants/constants";

export const Container = styled.div.attrs({
  classname: "d-flex flex-column",
})`
  margin-bottom: 25vh;
`;

export const Image = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const BottomImageContainer = styled.div.attrs({
  className: "container-fluid p-0",
})`
  height: 70vh;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    height: 60vh;
  }
`;
