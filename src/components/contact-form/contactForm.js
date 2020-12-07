import React, { useState } from "react";
import { NavButton } from "../nav/styled";
import { H2Body, P2 } from "../styles/styles";
import { StyledInput, StyledTextarea } from "./styled";

const ContactForm = ({ content }) => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);

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

  return (
    <div className="container my-5">
      <form className="col-12 col-lg-7">
        <div className="mb-5 d-flex">
          <div className="form-group col-6 p-0 pr-2">
            <label htmlFor="firstName">First name</label>
            <StyledInput
              id="firstName"
              type="text"
              className="form-control"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group col-6 p-0 pl-2">
            <label htmlFor="lastName">Last name</label>
            <StyledInput
              id="lastName"
              type="text"
              className="form-control"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group mb-5">
          <label htmlFor="email">Your email</label>
          <StyledInput
            id="email"
            type="text"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <label>Inquiry subject</label>
        <div className="form-group mb-5">
          {content.subjectOptions &&
            content.subjectOptions.map((subject, i) => {
              return (
                <div
                  className="form-check d-flex align-items-center my-3"
                  key={i}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`${subject}`}
                    onChange={(event) =>
                      updateSubjects(event.target.checked, event.target.id)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${subject}-${i}`}
                  >
                    <H2Body className="m-0">{subject}</H2Body>
                  </label>
                </div>
              );
            })}
        </div>
        <div className="form-group mb-5">
          <label htmlFor="message">Your message</label>
          <StyledTextarea
            className="form-control"
            id="message"
            rows="6"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></StyledTextarea>
          <small className="float-right mt-2">terms</small>
        </div>
        <NavButton
          className="col-6 py-3"
          onClick={() =>
            (window.location.href = `mailto:mckennapoulos@gmail.com?subject=Inquiring About ${selectedSubjects.join(', ')} &body=${message} %0D%0A %0D%0A From, %0D%0A %0D%0A ${firstName} ${lastName} %0D%0A %0D%0A email: ${email}`)
          }
        >
          <P2>SEND MESSAGE</P2>
        </NavButton>
      </form>
    </div>
  );
};

export default ContactForm;
