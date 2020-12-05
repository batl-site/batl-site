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
`;

export const Dot = styled.circle.attrs((props) => ({
  r: 7,
  fill: props.type == 'attendees'
    ? PRIMARY_NAVY
    : props.type == 'future'
      ? PRIMARY_YELLOW
      : props.type == 'visited'
        ? PRIMARY_GREEN
        : 'none',
}))``
