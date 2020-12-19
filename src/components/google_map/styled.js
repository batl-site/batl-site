import styled from "styled-components";
import { MIN_LG_DESKTOP_SIZE } from "../../constants/constants";

export const MapContainer = styled.div.attrs({
    className: "container-fluid p-0",
  })`
    height: 300px;
  
    @media (min-width: ${MIN_LG_DESKTOP_SIZE}) {
      height: 400px;
    }
  `;
