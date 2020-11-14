import styled from "styled-components";

export const ColorSection = styled.div.attrs({className: 'container-fluid'})`
    background-color: ${props => props.color};
    padding-bottom: 5rem !important;
`

export const TwoColumn = styled.div`
    column-count: 2;
    column-gap: 50px;
`

export const OneColumn = styled.div``

export const RelativeContainer = styled.div.attrs({className: 'container'})`
    position: relative;
`

export const Header = styled.div`
    position: absolute;
    top: -108px;
    padding: 0;

    @media (min-width: 576px) {
    padding: 0 15px;
    }
`

export const Content = styled.div.attrs({className: 'container'})`
    margin-top: -20px;
`

export const ButtonText = styled.div`
    margin: 0;
    padding: 15px 25px;
`