import styled from 'styled-components'
import { TEXT_BLACK, PRIMARY_YELLOW } from '../styles/styles'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MIN_SM_DESKTOP_SIZE } from '../../constants/constants'

export const Container = styled.div`
  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Tabs = styled.div.attrs({ className: 'col-md-6 col-lg-5' })`
  height: 75px;
  display: flex;
  justify-content: space-between;
`

export const Tab = styled(AnchorLink)`
  height: 100%;
  margin-bottom: 0;
  padding-top: 21px;
  color: ${TEXT_BLACK};
  &:hover {
    color: ${TEXT_BLACK};
    text-decoration: none;
    border-bottom: 3px solid ${PRIMARY_YELLOW}
  }
`
