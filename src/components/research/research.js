import React from 'react'
import { navigate } from "gatsby";
import { H1, H2, P1, P2, Button } from '../styles/styles'
import Images from './images/images'
import { Container, ImagesContainer, ContentContainer, HeaderContainer, ButtonText } from './styled'

const Research = ({ id, section, content, variant }) => {
   const buttonContent = content.callToAction.fields;
   return (
  <Container id={id}>
    <ImagesContainer>
      <Images images={content.images} variant={variant} />
    </ImagesContainer>
    <ContentContainer>
      
      <HeaderContainer>
      <H2>{section}</H2>
      <H1>{content.heading}</H1>
      </HeaderContainer>
      <P1>{content.description}</P1>
      <Button
        className="mt-4"
        onClick={() => navigate(`${buttonContent.buttonLink}`)}
      >
        <ButtonText>
         <P2>{buttonContent.label}</P2>
        </ButtonText>
      </Button>
    </ContentContainer>
  </Container>
 )
}
export default Research
