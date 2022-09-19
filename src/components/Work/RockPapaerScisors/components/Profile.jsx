import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 0 1em 0;
    width: 300px;
`   

export default function Profile ({children}) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}