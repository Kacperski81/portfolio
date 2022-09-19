import React from "react"
import styled from "styled-components"
import { settings } from "../configs/game"

const Wrapper = styled.div`
    max-width: 270px;
    height: 300px;
    margin: 0 auto;
    padding: 0;
    background-color: var(--clr-light);
    margin-buttom: 20px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.25);
`

const ChoiceGrid = styled.div`
    width: ${({userSelection}) => userSelection === "" ? '100%' : '90px'};
    height: 90px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const H3 = styled.h3`
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    padding: .5em;
    // background: yellow;

`

const Img = styled.img`
    width: 70px;
    height: 70px;
`

const VictoryImg = styled.img`
    margin: 0 auto;
    padding: 0;
`

export default function Computer({pcScore,pcSelection,userSelection,rockIcon,paperIcon,scissorsIcon,trophyIcon,winTarget}) {
        
        return (
        <Wrapper>
            <H3>{settings.pcName}</H3>
            {pcScore < winTarget ? (
                userSelection === "" ? (
                    <ChoiceGrid userSelection={userSelection}>
                        <H3>{settings.waitingMessage}</H3>
                    </ChoiceGrid>
                ) : (
                    <>
                    <ChoiceGrid>
                        <Img src={
                            pcSelection === "Rock"
                              ? rockIcon
                              : pcSelection === "Paper"
                              ? paperIcon
                              : scissorsIcon
                            } 
                            alt="icon" 
                        />
                    </ChoiceGrid>
                        <H3>PC selected: {pcSelection}</H3>
                    </>
                )
            ) : (
                <>
                    <VictoryImg src={trophyIcon} alt="trophy" />
                    <H3>Victory!</H3>
                </>
            )}
        </Wrapper>
    )
} 