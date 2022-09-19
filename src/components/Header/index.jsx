import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    position: sticky;
    top: 0px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    color: var(--clr-light);
`

const Nav = styled.nav`
    display: flex;
    justify-content: end;
`

const Ul = styled.ul`
    display: flex;

`

const Li = styled.li`
    list-style-type: none;
    padding: 0 1em;
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
`

const A = styled.a`
    text-decoration: none;
    color: var(--clr-light);
`

function Header() {

    return (
        <StyledHeader>
            <Nav>
                <Ul>
                    <Li>
                        <A href="#about">About</A>
                    </Li>
                    <Li>
                        <A href="#work">Work</A>
                    </Li>
                </Ul>
            </Nav>
        </StyledHeader>
    )
}

export default Header