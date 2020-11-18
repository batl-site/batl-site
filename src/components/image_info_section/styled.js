import styled from 'styled-components'

export const Container = styled.div.attrs((props) => ({
  className: "d-flex flex-wrap align-items-center"
}))`
  @media (min-width: 992px) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const ImagesContainer = styled.div.attrs((props) => ({
  className: "col-l2 col-lg-5 d-flex justify-content-center"
}))``

export const ContentContainer = styled.div.attrs((props) => ({
  className: "col-12 col-lg-7"
}))``

export const ButtonText = styled.div`
    margin: 0;
    padding: 15px 25px;
`
