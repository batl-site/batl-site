import React from "react";
import {
  Image,
  BottomImageContainer,
  Container,
} from "./styled";
const BottomImage = ({ content }) => {

  return (
    <Container>
      <BottomImageContainer>
        <Image image={content.fields.file.url}></Image>
      </BottomImageContainer>
    </Container>
  );
};

export default BottomImage;