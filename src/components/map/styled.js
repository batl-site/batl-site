import styled from 'styled-components'
import { PRIMARY_NAVY, PRIMARY_GREY, PRIMARY_YELLOW, PRIMARY_GREEN } from '../styles/styles'
import { MIN_LG_DESKTOP_SIZE } from '../../constants/constants'
import { Geography } from 'react-simple-maps'

export const Container = styled.div`
  margin: auto;

  @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
    max-width: 1140px;
  }
`;

export const Country = styled(Geography)`
  fill: ${PRIMARY_GREY};
  pointer-events: none;
`;

export const Dot = styled.circle.attrs({
  r: 5,
  fill: PRIMARY_NAVY
})``
