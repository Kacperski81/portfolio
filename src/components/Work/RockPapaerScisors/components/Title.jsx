import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
`

export default function Title({gameTitle}) {

    return (
        <H1>{gameTitle}</H1>
    )
}