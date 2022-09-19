import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
    
`

export default function Score({score}) {

    return (
        <H1>{score}</H1>
    )
}