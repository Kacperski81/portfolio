import React from "react"
import styled from "styled-components"

const H3 = styled.h3`
    color: #fff;
    margin: 0;
    padding: 0;
`

export default function Round(props) {

    return (
        <H3>
            {`Round ${props.round}`}
        </H3>
    )
}