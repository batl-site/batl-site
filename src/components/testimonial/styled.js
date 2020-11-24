import styled from "styled-components"

import {PRIMARY_NAVY} from "../styles/styles"


export const ColorWrapper = styled.div.attrs({className: 'container-fluid my-5'})`
    background-color: ${PRIMARY_NAVY}
`

export const Container = styled.div.attrs({className: 'container py-5'})`
    color: white;
`

export const Name = styled.div`
    text-transform: uppercase;
`