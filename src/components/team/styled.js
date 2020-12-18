import styled from "styled-components";
import { Button } from "../styles/styles";

export const Container = styled.div.attrs({ className: "container" })``;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 7em;
`;

export const CTA = styled(Button)`
  padding: 15px 50px;
`;
