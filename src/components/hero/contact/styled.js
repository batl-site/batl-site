import styled from "styled-components";
import { PRIMARY_NAVY } from "../../styles/styles";

export const HeroContainer = styled.div`
  color: white;
  background-color: ${PRIMARY_NAVY};
  height: 65vh;
`;

export const BottomAligner = styled.div`
    display: inline-block;
    height: 50%;
    vertical-align: bottom;
    width: 0px;
`

export const Container = styled.div.attrs({className: 'container'})`

`

export const Content = styled.div.attrs({className: 'col-12 col-lg-7'})`

`

