import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    max-width: 100%;
    
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 2fr 1fr 2fr;
    

    @media (max-width: 830px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
    }
`

export default function Playground({children}) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}