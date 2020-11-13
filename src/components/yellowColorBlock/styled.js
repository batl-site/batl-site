import styled from "styled-components";
import { PRIMARY_YELLOW } from "../styles/styles";

export const ColorSection = styled.div`
    background-color: ${PRIMARY_YELLOW};
    padding-bottom: 5rem !important;
`

export const TwoColumnContainer = styled.div`
    column-count: 2;
    column-gap: 50px;
`

export const OneColumnContainer = styled.div``

export const HeaderContainer = styled.div`
    position: absolute;
    top: -108px;
    padding: 0;

    @media (min-width: 576px) {
    padding: 0 15px;
    }
`

export const ContentContainer = styled.div`
    margin-top: -20px;
`