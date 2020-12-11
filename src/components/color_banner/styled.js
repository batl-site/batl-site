import styled from "styled-components";
import { MIN_MD_DESKTOP_SIZE, MIN_MOBILE_SIZE, MIN_SM_DESKTOP_SIZE, MIN_TABLET_SIZE } from "../../constants/constants"
import { PRIMARY_YELLOW, H1 } from "../styles/styles";

export const HideOverflow = styled.div`
  overflow-x: hidden;
`

export const Container = styled.div.attrs({
  className: 'container'
})`
`

export const Content = styled.div.attrs({
  className: 'col-11 col-md-9'
})`
  left: 8.33%;
  
  @media (min-width: ${MIN_TABLET_SIZE}) {
    left: 18.75%;
  }

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    left: 8.33%;
  }
`

export const Banner = styled.div`
  background-color: ${PRIMARY_YELLOW};
  margin-top: 24px;
  margin-left: -15px;
  padding-left: 15px;
  margin-right: -5000px;
  padding-right: 5000px;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    margin-top: 36px;
  }
`

export const Heading = styled(H1)`
  top: -24px;
  position: relative;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    top: -36px;
  }
`
