import styled from "styled-components";

export const ColorSection = styled.div.attrs({className: 'container-fluid'})`
    background-color: ${props => props.color};
    padding-bottom: 5rem !important;
`

export const TwoColumn = styled.div.attrs({className: 'd-none d-sm-block col-11 col-md-10 col-lg-8 col-xl-8'})`
    column-count: 2;
    column-gap: 50px;
`

export const OneColumn = styled.div.attrs({className="d-block d-sm-none d-col-12"})`
`

export const RelativeContainer = styled.div.attrs({className: 'container'})`
    position: relative;
`

export const Header = styled.div.attrs({className="col-10 col-md-8 col-lg-6 col-xl-4"})`
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