import React from "react"
import styled from "styled-components"
import { settings } from "../configs/game"

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 40px;
    margin: 0 auto .3em;
    background-color: #fff;
    border-radius: 20px;
    transition: transform 0.1s;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

const H3 = styled.h3`
    margin: 0;
    padding: 0;
`

export default function Reset({userScore,pcScore,onClick,winTarget,gameOn}) {

    return (
        gameOn && (
            <Wrapper onClick={onClick}>
                <H3>
                    {userScore === winTarget || pcScore === winTarget
                      ? "Play again"
                      : "Reset"
                    }
                </H3>
            </Wrapper>
        )
    )
}