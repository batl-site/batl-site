import styled from "styled-components";
import { PRIMARY_YELLOW } from "../styles/styles";

export const HeroImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const HeroImageContainer = styled.div`
    height: 75vh;
    padding: 0 !important;

    @media (min-width: 1550px) {
        height: 40vh;
    }
`

export const HeroBlockOverlay = styled.div`
    background-color: ${PRIMARY_YELLOW};
    position: relative;
    top: -35vh;
    right: 45px;
    z-index: 10000;
    padding: 60px !important;
    overflow: hidden;

    @media (min-width: 1550px) {
        top: -15vh;
    }

`
