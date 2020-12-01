import { Link } from "gatsby";
import styled from "styled-components";
import { MAX_ZINDEX, MIN_SM_DESKTOP_SIZE, MIN_TABLET_SIZE } from "../../../constants/constants";
import {
  BG_WHITE,
  H1,
  PRIMARY_NAVY,
  TEXT_BLACK,
} from "../../styles/styles";

export const HamburgerContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  z-index: ${MAX_ZINDEX};
`;

export const Bar = styled.div`
  width: 35px;
  height: 3px;
  background-color: ${TEXT_BLACK};
  margin: 8px 0;
  border-radius: 50px;
`;

export const XBar = styled.div`
  width: 35px;
  height: 3px;
  background-color: white;
  margin: 8px 0;
  border-radius: 50px;

  transform: ${props => props.leftBar ? 'rotate(-45deg) translate(-6px, 8.5px)' : 'rotate(45deg) translate(1px, -2px)'};
`;

export const HamburgerMenu = styled.div`
  display: inline-block;
  cursor: pointer;
  z-index: ${MAX_ZINDEX};
  padding-top: 0;
  padding-bottom: 0;
`;

export const MenuContainer = styled.div`
  display: none;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;

  @media (min-width: 0px) {
    padding-left: 0;
  }
  @media (min-width: ${MIN_TABLET_SIZE}) {
    padding-left: 0;
  }
  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    padding-left: 0;
  }
`;

export const MenuContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: ${PRIMARY_NAVY};
  top: 0;
  left: 0;
`;
export const HambLinkContainer = styled.div`
  margin-top: 50%;
  @media (min-width: 0px) {
    padding-left: 30px;
  }
  @media (min-width: ${MIN_TABLET_SIZE}) {
    padding-left: 50px;
  }
  @media (min-width: ${MIN_SM_DESKTOP_SIZE}) {
    padding-left: 100px;
  }
  @media (min-width: 1200px) {
    padding-left: 150px;
  }
`;

export const HambHeaderLink = styled(Link)`
  color: ${BG_WHITE};
  :hover {
    text-decoration: none;
  }
`;

export const HambHeaderPage = styled(H1)`
  color: ${BG_WHITE};
`;
