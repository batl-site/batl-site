import styled from "styled-components"

import {PRIMARY_GREEN} from "../styles/styles"


export const ColorWrapper = styled.div.attrs({className: 'container-fluid'})`
    background-color: ${PRIMARY_GREEN}
`

export const Container = styled.div.attrs({className: 'container py-5'})`
    color: black;
`

export const Name = styled.div`
    text-transform: uppercase;
`