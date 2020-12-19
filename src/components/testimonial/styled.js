import styled from "styled-components";
import { H1, PRIMARY_GREY, TEXT_BLACK } from "../styles/styles";

export const ColorWrapper = styled.div.attrs({
  className: "container-fluid col-11 my-5",
})`
  background-color: ${PRIMARY_GREY};
  margin: 10% 0;
`;

export const Container = styled.div.attrs({ className: "container py-5" })`
    color: ${TEXT_BLACK};
`;

export const QuotationMark = styled(H1)`
    font-size: 96px;
    margin-bottom: -20px;
`

