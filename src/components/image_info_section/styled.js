import styled from 'styled-components'

export const Container = styled.div.attrs({ className: "d-flex flex-wrap align-items-center" })`
  padding: 5em 0;

  @media (min-width: 992px) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const ImagesContainer = styled.div.attrs({
  className: "col-l2 col-lg-5 d-flex justify-content-center"
})``

export const ContentContainer = styled.div.attrs({ className: "col-12 col-lg-7" })``
