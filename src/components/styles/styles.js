import { Link } from "gatsby";
import styled from "styled-components";

// Colors
export const PRIMARY_YELLOW = "#FFD43D";
export const PRIMARY_GREEN = "#74D395";
export const PRIMARY_NAVY = "#023047";
export const PRIMARY_RED = "#FF6752";
export const PRIMARY_ORANGE = "#FF9D42";

export const TEXT_BLACK = "#1A1A1A";
export const BG_WHITE = "#F8F8F8";

// Fonts
export const H1 = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 36px;
  margin-bottom: 35px;

  @media (min-width: 576px) {
    font-size: 55px;
    margin-bottom: 55px;
  }
`;

export const H2 = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 31px;

  @media (min-width: 576px) {
    font-size: 22px;
  }
`;

export const P1 = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 0;

  @media (min-width:  576px) {
    font-size: 16px;
    line-height: 30px;
  }
  
`

export const P2 = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

// Links
export const SecondaryLink = styled(P2)`
  text-decoration: none;
  color: ${TEXT_BLACK};

  :hover{ 
    text-decoration: none;
  }

` 

// Images
export const RoundImage = styled.img`
  border-radius: 50%;
`;

export const Button = styled.button`
  text-transform: uppercase;
  border: 2px solid ${TEXT_BLACK};
  background-color: transparent;
  background-repeat: no-repeat;
  color: ${props => console.log('this is color', props.color)};

  &:hover {
    background-color: ${TEXT_BLACK};
    color: ${props => props.color ? PRIMARY_YELLOW : BG_WHITE};
  }
`;

// background-color
export const BackgroundColor = styled.div`
  background-color: ${BG_WHITE}
`
