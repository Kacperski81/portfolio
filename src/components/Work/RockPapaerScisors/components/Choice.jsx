import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledImg = styled.img`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    transition: transform 0.1s;

    :hover {
        cursor: pointer;
        background-color: #000;
        transform: scale(1.2)
    }
`

export default function Choice ({value,choiceIcon,onClick}) {

    return (
        <Wrapper value={value}>
            <StyledImg src={choiceIcon} onClick={onClick} alt="icon" />
        </Wrapper>
    )
}


