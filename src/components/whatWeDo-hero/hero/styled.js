import styled from 'styled-components'
import { PRIMARY_YELLOW } from "../../styles/styles"

export const ColorBlock = styled.div`
  background-color: ${PRIMARY_YELLOW};
  position: relative;
`

export const Container = styled.div`
  padding: 325px 0px ;
  position: relative;

  @media (min-width: 320px) {
    top: -220px;
  }

  @media (min-width: 576px) {
    top: -220px;
  }

  @media (min-width: 768px) {
    top: -290px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
    top: -290px; 
  }

  @media (min-width: 1200px) {
    max-width: 1180px;
    top: -200px;

  }

  @media (min-width: 1390px) {
    top: -200px;
    right: -120px;
  }

`

export const ContentContainer = styled.div.attrs({ className: "col-md-6 col-lg-5 "})`
  float: right;
  
`

export const SideImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  margin-bottom: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: -60px;
  left: 0;
  


  @media (min-width: 1550px) {
    display: none;
  }
`

export const XLImage = styled.img`
  display: none;
  @media (min-width: 1550px) {
    display: block;
    margin-bottom: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    bottom: -75px;
    left: 0;
  }
`

export const FullBleedImage = styled.img.attrs({ className: 'd-md-none' })`
  margin-bottom: 0;`