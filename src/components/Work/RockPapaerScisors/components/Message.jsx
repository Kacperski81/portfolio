import {useState} from "react"
import styled from "styled-components"
import { settings } from "../configs/game"
import Reset from "./Reset"
import Round from "./Round"
import Score from "./Score"
import Settings from "./Settings"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    height: 300px;
    padding: 0;
    @media (max-width: 830px) {
        height: auto;
        width: 300px;
    }
`

const Dashboard = styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${({userSettings}) => userSettings ? '0px' : '90%'};
    transition: height .4s;
    @media(max-width: 830px) {
        height: ${({userSettings}) => userSettings ? '0px': '90%'};
        transition: height .4s; 
    }
`

const H3 = styled.h3`
    color: #fff;
    margin: 0;
    padding: 0;
`

const ScoreGrid = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
const P = styled.p`
    margin: 0;
    padding: 0;
    color: var(--clr-light);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
`

export default function Message({
    userSelection, 
    message, 
    onClick, 
    pcScore, 
    userScore,
    round,
    userName,
    winTarget,
    handleSubmit,
    gameOn,
    userSettings,
    changeUserSettings}) {
    
    return (
        <Wrapper>
            {!gameOn ? (
                <>
                  <Settings 
                    userName={userName} 
                    winTarget={winTarget} 
                    gameOn={gameOn} 
                    handleSubmit={handleSubmit} 
                    userSettings={userSettings}
                    changeUserSettings={changeUserSettings}
                  />  
                </>
            ) : (
                <>  
                    <Settings 
                      userName={userName}
                      winTarget={winTarget}
                      gameOn={gameOn} 
                      handleSubmit={handleSubmit}
                      userSettings={userSettings} 
                      changeUserSettings={changeUserSettings}
                      />
                    <Dashboard userSettings={userSettings}>
                        <Round userSelection={userSelection} round={round} />
                        <H3>{message ? message : "You first!"}</H3>
                        <ScoreGrid>
                            <Score score={userScore} />
                            <P> : </P>
                            <Score score={pcScore} />
                        </ScoreGrid>
                        <Reset 
                          gameOn={gameOn}
                          onClick={onClick}
                          pcScore={pcScore}
                          userScore={userScore}
                          winTarget={winTarget}
                        />
                    </Dashboard>
                </>
            )}
        </Wrapper>
    )
}