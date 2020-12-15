import styled from 'styled-components'
import { TEXT_BLACK, H3 } from '../../styles/styles'

export const Container = styled.div.attrs({ className: 'd-flex' })`
  margin: 10em 0em;
`;

export const Indent = styled.div.attrs((props) => ({
  className: `col-1 ${props.size == 1 ? 'col-md-3' : 'col-md-6'}`
}))`
  border-top: 1px dashed ${TEXT_BLACK};
`;

export const Dot = styled.span`
  background-color: ${TEXT_BLACK};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  top: -6px;
  right: 0px;
  position: absolute;
`;

export const Content = styled.div.attrs({ className: 'col-10 col-md-5' })``;

export const Title = styled(H3)`
  margin-bottom: 1.5em;
`;
