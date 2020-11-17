import styled from "styled-components";

import { TEXT_BLACK, PRIMARY_YELLOW } from "../styles/styles"

export const NavButton = styled.button`
  background-color: transparent;
  border: 1px solid ${TEXT_BLACK};
  padding: 8px 20px;

  :hover {
    color: white;
    background-color: ${TEXT_BLACK};
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 0;
`

export const NavContainer = styled.div.attrs({className: 'container'})`
  display: flex;
  justify-content: space-between;
  padding: 25px 0 15px 0;
  color: ${TEXT_BLACK};
  align-items: end;
`;

export const NavPages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: baseline;
`;

export const NavItem = styled.div`
  color: black;
  text-decoration: none;
  padding-bottom: 15px;
  border-bottom: ${props => props.button ? 'none' : "4px solid rgba(56, 206, 194, 0)"};

  :hover {
    text-decoration: none;
    border-bottom: 4px solid ${PRIMARY_YELLOW};
  }
`;

export const LogoContainer = styled.div``;
