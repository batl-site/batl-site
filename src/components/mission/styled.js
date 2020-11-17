import styled from "styled-components";

export const ImageWrapper = styled.div.attrs({className: "mb-5"})`
  float: right;
  padding: 0 !important;
  width: 80vw;

  @media (min-width: 768px) {
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export const Description = styled.div.attrs({className:"col-12 col-md-6 col-lg-4"})`
  padding: 0 !important;

  @media (min-width: 768px) {
    padding-left: 11.5vw !important;
  }

  @media (min-width: 1550px) {
      padding-left: 0 !important;
  }

`;

export const BleedBreakPoint = styled.div`
  @media (min-width: 1550px) {
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

// @media (min-width: 1200px){
//     max-width: 1140px;
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     margin-right: auto;
//     margin-left: auto;
//   }
//   @media (min-width: 992px) {
//     max-width: 960px;
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     margin-right: auto;
//     margin-left: auto;
//   }
//   @media (min-width: 768px) {
//     max-width: 720px;
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     margin-right: auto;
//     margin-left: auto;
//   }

//   @media (min-width: 576px) {
//     max-width: 540px;
//     width: 100%;
//     padding-right: 15px;
//     padding-left: 15px;
//     margin-right: auto;
//     margin-left: auto;
//   }

export const Content = styled.div.attrs({className: "d-none d-md-inline-flex"})`
  justify-content: space-between;

  @media (min-width: 1550px) {
    max-width: 1140px;
    width: 100%;
    margin-right: auto !important;
    margin-left: auto  !important;
  }`;
