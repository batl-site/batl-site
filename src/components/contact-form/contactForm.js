import React, { useState } from "react";
import { NavButton } from "../nav/styled";
import { H2Body, P2, SmallText } from "../styles/styles";
import {
  StyledInput,
  StyledTextarea,
  FormContainer,
  Form,
  InlineInputWrapper,
  InputWrapper,
  InlineInput,
  CheckboxWrapper,
  Checkbox,
  CheckboxLabel,
  SendButton,
  Terms,
} from "./styled";

const ContactForm = ({ content }) => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showTerms, setShowTerms] = useState(false);

  const updateSubjects = (value, id) => {
    if (value) {
      if (!selectedSubjects.includes(id)) {
        setSelectedSubjects([...selectedSubjects, id]);
      }
    } else {
      if (selectedSubjects.includes(id)) {
        const newSubjects = selectedSubjects.filter(
          (subject) => subject !== id
        );
        setSelectedSubjects(newSubjects);
      }
    }
  };

  const toggleTerms = () => {
    if (showTerms) {
      setShowTerms(false)
    } else {
      setShowTerms(true)
    }
  };

  return (
    <FormContainer>
      <Form>
        <InlineInputWrapper>
          <InlineInput left="true">
            <label htmlFor="firstName">First name</label>
            <StyledInput
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </InlineInput>
          <InlineInput left="false">
            <label htmlFor="lastName">Last name</label>
            <StyledInput
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </InlineInput>
        </InlineInputWrapper>
        <InputWrapper>
          <label htmlFor="email">Your email</label>
          <StyledInput
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputWrapper>
        <label>Inquiry subject</label>
        <InputWrapper>
          {content.subjectOptions &&
            content.subjectOptions.map((subject, i) => {
              return (
                <CheckboxWrapper key={i}>
                  <Checkbox
                    type="checkbox"
                    value=""
                    id={`${subject}`}
                    onChange={(event) =>
                      updateSubjects(event.target.checked, event.target.id)
                    }
                  />
                  <CheckboxLabel htmlFor={`${subject}-${i}`}>
                    <H2Body className="m-0">{subject}</H2Body>
                  </CheckboxLabel>
                </CheckboxWrapper>
              );
            })}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="message">Your message</label>
          <StyledTextarea
            id="message"
            rows="6"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></StyledTextarea>
          {showTerms && (
            <div>
              <SmallText>{content.terms}</SmallText>
            </div>
          )}
          <Terms onClick={() => toggleTerms()}>terms</Terms>
        </InputWrapper>
        <SendButton
          onClick={() =>
            (window.location.href = `mailto:${
              content.email
            }?subject=Inquiring About ${selectedSubjects.join(
              ", "
            )} &body=${message} %0D%0A %0D%0A From, %0D%0A %0D%0A ${firstName} ${lastName} %0D%0A %0D%0A email: ${email}`)
          }
        >
          <P2>SEND MESSAGE</P2>
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
