import React from "react"
import styled from "styled-components";
import { settings } from "./configs/game";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";
import { useState } from "react";

import Playground from "./components/Playground"
import Profile from "./components/Profile"
import Message from "./components/Message"
import User from "./components/User"
import Choice from "./components/Choice"
import Computer from "./components/Computer"

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    display: flex;
    place-items: center;
    gap: 0;
    background: #16e0bd;
`

const ImgElement = styled.img`
    width: 80px;
    display: block;
    `
function RockPaperScisors() {
    let [game,setGame] = useState({
        userSelection: "",
        pcSelection: "",
        round: 0,
        userScore: 0,
        pcScore: 0,
        message: "",
    })

    const [gameSettings,setGameSettings] = useState({
        gameOn: false,
        userName: settings.userName,
        winTarget: settings.winTarget
    })

    const [userSettings,setUserSettings] = useState(true)

    const changeUserSettings = () => {
        setUserSettings(prev => !prev);
    }
        
    const reset = () => {
    setGame({
        ...game,
        userSelection: "",
        pcSelection: "",
        round: 0,
        userScore: 0,
        pcScore: 0,
        message: "",
        })
    }   

    const {winMessage, tieMessage, lostMessage} = settings
    const {pcScore, userScore} = game

    const play = (e) => {
        if(pcScore < gameSettings.winTarget) {
            const userSelection = e.target.parentNode.getAttribute("value");
            const pcSelection = ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)]

            userSelection === pcSelection
              ? setGame({
                ...(game.message = tieMessage)
              })
              : (userSelection === "Rock" && pcSelection === "Scissors") ||
                (userSelection === "Paper" && pcSelection === "Rock") ||
                (userSelection === "Scissors" && pcSelection === "Paper")
              ? setGame({
                  ...(game.userScore += 1),
                  ...(game.message = winMessage)
              })
              : setGame({
                  ...(game.pcScore += 1),
                  ...(game.message = lostMessage)
              })
            setGame({
                ...game,
                round: (game.round += 1),
                userSelection,
                pcSelection
            })
        }
    }
    


    const handleSubmit = (e) => {
        e.preventDefault()
        let newGameSettings = {}
        const {userName, winTarget} = e.target.elements
        if(userName.value === "" || userName.value.length > 10) {
            newGameSettings = {
                gameOn: true,
                userName: "Player 1",
                winTarget: Number(winTarget.value),
            }   
        } else {
            newGameSettings = {
                gameOn: true,
                userName: userName.value,
                winTarget: Number(winTarget.value),
            }
        }
        setGameSettings(newGameSettings)
        setUserSettings(false)
        reset()
    }


    return(
        <Wrapper>
            <Playground>
                <Profile>
                    <User 
                        userSelection={game.userSelection}
                        userScore={userScore}
                        trophyIcon={trophy}
                        userName={gameSettings.userName}
                        winTarget={gameSettings.winTarget}
                        gameOn={gameSettings.gameOn}
                    >
                        <Choice value="Rock" onClick={play} choiceIcon={rock} />
                        <Choice value="Paper" onClick={play} choiceIcon={paper} />
                        <Choice value="Scissors" onClick={play} choiceIcon={scissors}/>
                    </User>
                </Profile>
                <Message 
                    userSelection={game.userSelection} 
                    message={game.message} 
                    userScore={userScore} 
                    pcScore={pcScore} 
                    onClick={reset}
                    round={game.round}
                    userName={gameSettings.userName}
                    winTarget={gameSettings.winTarget}
                    handleSubmit={handleSubmit}
                    gameOn={gameSettings.gameOn}
                    userSettings={userSettings}
                    changeUserSettings={changeUserSettings} 
                    />
                <Profile>
                    <Computer
                        pcScore={pcScore}
                        userSelection={game.userSelection}
                        pcSelection={game.pcSelection}
                        rockIcon={rock}
                        paperIcon={paper}
                        scissorsIcon={scissors}
                        trophyIcon={trophy}
                        winTarget={gameSettings.winTarget}
                    />
                </Profile>
            </Playground>
        </Wrapper>
    )
}

export default RockPaperScisors