import styled from 'styled-components'
import { TEXT_BLACK } from '../../components/styles/styles'

export const Container = styled.div.attrs({ className: 'container' })``;

export const Line = styled.div`
  border-left: 1px solid ${TEXT_BLACK};
`;
