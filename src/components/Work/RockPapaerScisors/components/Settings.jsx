import React from "react"
import styled from "styled-components"
import settingsIcon from "../assets/settings.png"

const Wrapper = styled.div`
    width: 100%;
    margin-top: .2em;
    height: ${({userSettings}) => userSettings ? '150px' : '25px'};
    display: flex;
    flex-direction: column;
    transition: height .4s;
    overflow: hidden;   
`

const SettingsIcon = styled.img`
    width: 20px;
    display: block;
    align-self: flex-end;
    transition: transform 0.3s;

    :hover {
        transform: rotate(-180deg);
        cursor: pointer;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Label = styled.label`     
    margin: 0;
    margin-bottom: 5px;
    padding: .3em .5em;
    color: var(--clr-dark);
    line-height: 1em;
`

const Input = styled.input`
    margin: 0;
    margin-left: .3em;
    max-width: 60px;
    text-align: center;
    background: ver(--clr-light);
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgba(0,0,0,.25);
    cursor: pointer;
    
    :hover {
        
    }

    :focus {
        outline: none;
        background: var(--clr-light);
    }


`

const Button = styled.button`
    align-self: center;
    padding: .5em .75em;
    background: #fff;
    margin-bottom: .4em;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,.25);
    transition: transform 0.1s;
    font-weight: bold;

    :hover {
        cursor: pointer;
        transform: scale(1.1);        
   }
`

export default function Settings({userName,winTarget,handleSubmit, userSettings, changeUserSettings}) {

    return (
        <Wrapper userSettings={userSettings}>
            <SettingsIcon src={settingsIcon} onClick={changeUserSettings}/>
            <Form onSubmit={handleSubmit}>
                <Label>User name:
                    <Input type="text" name="userName" defaultValue={userName} minLength={1} />
                </Label>
                <Label>Winning target:
                    <Input type="number" name="winTarget" defaultValue={winTarget} min={1} max={10}/>
                </Label>
                <Button type="submit">Play Game!</Button>
            </Form>
        </Wrapper>
    )
}