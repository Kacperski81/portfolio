import React from "react"
import RockPaperScisors from "./RockPapaerScisors"
import styled from "styled-components"

const Wrapper = styled.div`
    box-sizing: border-box;
    max-width: 1000px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.25);
    margin-bottom: 1em;    
`

const H1 = styled.h1`
    text-align: center;
    margin: 0;
    padding: 0;
`

const Paragraph = styled.p`
    margin: 0;
    padding: .4em;
`
         

function Work() {

    return (
        <Wrapper id="work">
            <H1>Sample work</H1>
            <Paragraph>This is a Rock Paper Scisors game, during the building process I have lerned the building
                principles of the game, like how to import the graphics, seperate the configuration settings from
                the main codebase, update the states, and use conditional rendering accordingly.
            </Paragraph>
            <RockPaperScisors />
        </Wrapper>
    )
}

export default Work