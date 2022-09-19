import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    max-width: 1000px;
    width: 100%;
    background-color: var(--clr-dark);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.25);
`

const H3 = styled.h3`
    font-size: var(--fs-body);
    margin: 0;
    color: var(--clr-accent);
    
`

function Footer() {

    return (
        <StyledFooter>
            <H3>kacperski81@gmail.com</H3>
        </StyledFooter>
    )
}

export default Footer