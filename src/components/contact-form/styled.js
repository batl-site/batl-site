import styled from "styled-components";
import { NavButton } from "../nav/styled";
import { PRIMARY_GREY, SmallText } from "../styles/styles";

export const StyledInput = styled.input.attrs({ className: "form-control" })`
  border-radius: 0 !important;
  background-color: ${PRIMARY_GREY} !important;
  border: none !important;
`;

export const StyledTextarea = styled.textarea.attrs({
  className: "form-control",
})`
  border-radius: 0 !important;
  background-color: ${PRIMARY_GREY} !important;
  border: none !important;
`;

export const FormContainer = styled.div.attrs({ className: "container" })`
  margin-top: 100px;
`;

export const InputWrapper = styled.div.attrs({
  className: "form-group mb-5",
})``;

export const Form = styled.form.attrs({ className: "col-12 col-lg-7" })``;

export const InlineInputWrapper = styled.div.attrs({
  className: "mb-5 d-flex",
})``;

export const InlineInput = styled.div.attrs((props) => ({
  className: `col-6 p-0 pr-2 mb-0' ${props.left ? "pr-2" : "l-2"}`,
}))``;

export const CheckboxWrapper = styled.div.attrs({
  className: "form-check d-flex align-items-center my-3",
})``;

export const Checkbox = styled.input.attrs({ className: "form-check-input" })``;

export const CheckboxLabel = styled.label.attrs({
  className: "form-check-label",
})``;

export const SendButton = styled(NavButton).attrs({className: 'col-6 py-3'})``

export const Terms = styled(SmallText).attrs({className: 'float-right mt-2'})`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
