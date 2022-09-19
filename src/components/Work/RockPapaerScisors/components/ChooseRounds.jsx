import React from "react"
import styled from "styled-components"


const Form = styled.form`

`

const Label = styled.label`
    color: #fff;
`

const Input = styled.input`
    background-color: blue;
    border: none;
    margin-left: 3px;
    width: 20%;
    box-shadow: 0px 0px 3px;
    color: #fff;
    padding: 4px;
    text-align: center;
`

export default function ChooseRound() {

    return (
        <Form>
            <Label>Choose wining target  
                <Input type="number" defaultValue={10}/>
            </Label>
        </Form>
    )
}