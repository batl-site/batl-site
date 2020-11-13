import styled from "styled-components";

export const MissionImage = styled.img``;

export const ImageContainer = styled.div`
  width: 80vw;

  @media (min-width: 768px) {
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export const DescriptionContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 11.5vw !important;
  }

  @media (min-width: 1550px) {
      padding-left: 0 !important;
  }

`;

export const Container = styled.div`
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

export const ContentContainer = styled.div`
  @media (min-width: 1550px) {
    max-width: 1140px;
    width: 100%;
    margin-right: auto !important;
    margin-left: auto  !important;
  }`;
