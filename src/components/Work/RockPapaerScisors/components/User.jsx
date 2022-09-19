import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    // box-sizing: border-box;
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
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-item: center;
`

const H3 = styled.h3`
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    padding: .5em;   
`

const Img = styled.img`
    margin: 0 auto;
    min-width: 50px;
`

export default function User({userScore,userSelection,children,trophyIcon,userName,winTarget,gameOn}) {

    return (
        <Wrapper>
            <H3>{userName}</H3>
            {userScore < winTarget ? (
                <>
                    <ChoiceGrid>{gameOn ? children : ""}</ChoiceGrid>
                    <H3>
                        {userSelection === ""
                            ? ""
                            : `Your choice: ${userSelection}`}
                    </H3>
                </>
            ) : (
                <>
                    <Img src={trophyIcon} alt="trophy" />
                    <H3>Victory!</H3>
                </>
            )}
        </Wrapper>
    )
}