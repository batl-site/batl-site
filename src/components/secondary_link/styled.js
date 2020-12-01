import { Link } from 'gatsby';
import styled from 'styled-components';
import { P2, PRIMARY_YELLOW, TEXT_BLACK } from '../styles/styles';

export const LinkContainer = styled.div.attrs({className: 'my-3'})`
  display: flex;
  position: relative;
  width: max-content;
  z-index: 1;
`;

export const HighlightHover = styled.div`
  text-decoration: none;
  color: ${TEXT_BLACK};

  :hover {
    ::after {
      content: "";
      display: inline-block;
      bottom: 5%;
      background-color: ${PRIMARY_YELLOW};
      height: 40%;
      width: 100%;
      position: absolute;
      z-index: -1;
    }
  }
`;

export const ExternalLink = styled.a`
  :hover {
    text-decoration: none;
  }
`
export const InternalLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

export const SecondaryLinkText = styled(P2)`
  text-decoration: none;
  color: ${TEXT_BLACK};

  :hover {
    text-decoration: none;
  }
`;