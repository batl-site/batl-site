import styled from "styled-components";
import { P1 } from "../../styles/styles";

export const ArticleImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ImageContainer = styled.div`
  height: 350px;
  margin-bottom: 25px;
`;

export const ArticleSummary = styled(P1).attrs({
  className: "d-none d-lg-block",
})``;

export const SizeWrapper = styled.div.attrs({
  className: "col-8 col-md-3 p-0 mb-5",
})``;
