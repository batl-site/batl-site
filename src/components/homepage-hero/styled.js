import styled from "styled-components";
import { PRIMARY_YELLOW } from "../styles/styles";

export const HpHeroContainer = styled.div.attrs({classname: "d-flex flex-column"})`
    margin-bottom: 25vh;
`

export const HeroImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const HeroImageContainer = styled.div.attrs({className: "container-fluid"})`
    height: 70vh;
    padding: 0 !important;

    @media (min-width: 1550px) {
        height: 60vh;
    }
`

export const HeroBlockOverlay = styled.div.attrs({className:"col-11 col-md-7"})`
    background-color: ${PRIMARY_YELLOW};
    position: relative !important;

    z-index: 10000;
    padding: 60px !important;
    overflow: hidden;
    bottom: 40vh;

    @media (min-width: 1550px) {
        top: -35vh;
    }

`

export const HeroBlockPosition = styled.div.attrs({className: "position-absolute"})`
    margin-left: -60px;
`

export const Container = styled.div.attrs({className: "container"})``
