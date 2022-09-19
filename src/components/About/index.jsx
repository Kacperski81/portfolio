import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    background: #303030; 
    color: #fff;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.25);
    margin-bottom: 1em;
`

const H1 = styled.h1`
    text-align: center;    
    font-weight: 300;
    padding-bottom: 0;
    margin: 0;
`

const H3 = styled.h3`
    background: #16e0bd;
    text-align: right;
    padding: .3em .6em;
    margin: 0;
    font-weight: var(--fw-bold);
`

const P = styled.p`
    margin: 0;
    padding: .4em;
    background: #303030;
`

function About() {

    return (
        <Wrapper id="about">
            <H1>Hi, I am <strong>Marcin Kacperski</strong></H1>
            <H3>front-end and react developer</H3>
            <P>
                I am hard working, motivated person with more than 5 years experience in business
                Administration. My greatest strengths are clear, logical mind with a practical approach to
                problem-solving. I am friendly individual with a great passion for learning.
                I am currently looking for an opportunity to utilise and grow my skills in software development.
            </P>            
        </Wrapper>
    )
}

export default About