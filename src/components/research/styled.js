import styled from 'styled-components'
import { MIN_SM_DESKTOP_SIZE } from '../../constants/constants'

export const Container = styled.div.attrs({ className: "d-flex flex-wrap align-items-center" })`
  padding: 5em 0;

  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const ImagesContainer = styled.div.attrs({
  className: "col-l2 col-lg-5 col-sm-6 d-flex justify-content-center"
})`
`

export const HeaderContainer = styled.div.attrs({ className: "col-lg-11 " })`
  left: -17px; 
`

export const ContentContainer = styled.div.attrs({ className: "col-12 col-lg-6 col-sm-6" })`
  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    max-width: 1140px;
    left: 80px;
  }
`

export const ButtonText = styled.div`
  margin: 0;
  padding: 15px 25px;
`;