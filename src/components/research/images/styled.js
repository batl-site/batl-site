import styled from 'styled-components'
import { RoundImage } from '../../styles/styles'
import {
  OVERLAY_ZINDEX,
} from "../../../constants/constants";

export const LargeImage = styled(RoundImage).attrs({
  className: "col-10 col-md-7 col-lg-12"
})``

export const SmallImage = styled(RoundImage).attrs({
  className: "col-6"
})`
  z-index: ${OVERLAY_ZINDEX};
`

export const MediumImage = styled(RoundImage).attrs({
  className: "col-8"
})`
  z-index: ${OVERLAY_ZINDEX};
`

export const DoubleImageContainer = styled.div.attrs({
  className: "mt-n5 mt-lg-auto"
})``

export const RowOne = styled.div.attrs((props) => ({
  className: `row ${props.variant && 'justify-content-end'}`
}))``

export const RowTwo = styled.div.attrs((props) => ({
  className: `row ${!props.variant && 'justify-content-end'}`
}))``

export const SprinkleMedium = styled.img`
  position: absolute;
  width: 50%;
  transform: translate(9px, -12px);
`;

export const SprinkleSmall = styled.img`
  position: absolute;
  width: 22%;
  transform: translate(-10px, -12px);
`;