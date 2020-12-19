import styled from "styled-components";


export const PartnerImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : null)};
  height: 100%;
  width: 120%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ImageContainer = styled.div`
  height: 100px;
  width: 120px; 
  margin-bottom: 25px;
`;

export const SizeWrapper = styled.div.attrs({
  className: "col-md-4 col-xs-6 p-0 mb-5",
})``;
