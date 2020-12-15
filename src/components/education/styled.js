import styled from "styled-components";

export const ColorSection = styled.div.attrs({className: 'container my-5'})`
    background-color: ${props => props.color};
    padding-bottom: 5rem !important;
    position: relative;
    float: left;
    bottom: -220px;
`

export const Paragraph1 = styled.div.attrs({className: 'd-none d-sm-block col-11 col-xs-8 col-md-10 col-lg-5 col-xl-5'})`
    top: -50px;
    float: none;


    @media (min-width: 992px) {
    right: -100px;
    }

    @media (min-width: 1200px) {
    right: -100px;
    }
`

export const Paragraph2 = styled.div.attrs({className: 'd-none d-sm-block col-11 col-md-10 col-lg-5 col-xl-5'})`
    top: -0px;
    float: none;


    @media (min-width: 992px) {
    right: -100px;
    }

    @media (min-width: 1200px) {
    right: -100px;
    }
`

export const RelativeContainer = styled.div.attrs({className: 'container'})`
    position: relative;
`

export const Header = styled.div.attrs({className: "col-10 col-md-8 col-lg-6 col-xl-10"})`
    position: absolute;
    top: -151px;
    padding: 0;

    @media (min-width: 576px) {
    padding: 0 15px;
    }

    @media (min-width: 992px) {
    right: -100px;
    }

    @media (min-width: 1200px) {
    right: -100px;
    }
`

export const Header2 = styled.div.attrs({className: "col-10 col-md-8 col-lg-6 col-xl-10"})`
    position: absolute;
    top: -151px;
    padding: 0;

    @media (min-width: 576px) {
    padding: 0 15px;
    }

    @media (min-width: 992px) {
    right: -100px;
    }

    @media (min-width: 1200px) {
    right: -100px;
    }
`

export const Content = styled.div.attrs({className: 'container-fluid'})`
    margin-top: -20px;
`
