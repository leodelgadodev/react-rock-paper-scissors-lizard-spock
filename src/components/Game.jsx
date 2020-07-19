import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import lizard from '../resources/lizard.svg';
import rock from '../resources/rock.svg';
import paper from '../resources/paper.svg';
import scissors from '../resources/scissors.svg';
import spock from '../resources/spock.svg';

import GameEngine from '../model/GameEngine';

export default function Game() {

    const [playerTurn, setPlayerTurn] = useState("");
    const [turn, setTurn] = useState(1);
    const [turnCount, setTurnCount] = useState(1);
    const [computerTurn, setComputerTurn] = useState(false);

    useEffect(() => {
        if(turn === 1) {
            setPlayerTurn(GameEngine.getPlayer(1));
        } else {
            setPlayerTurn(GameEngine.getPlayer(2));
        }
    }, []);


    const togglePlay = (choice) => {
        // debugger; let player2 = GameEngine.getPlayer(2);
        // debugger; setPlayerTurn(player2);
        switch(turn) {
            case 1: {
                GameEngine.saveChoice(1, choice);
                setPlayerTurn(GameEngine.getPlayer(2));
                setTurn(2);
                
                if(GameEngine.getPlayer(2) === "Computador") {
                    setComputerTurn(true);
                    simulateComputerPlay();
                }

            } break; 
            case 2: {
                GameEngine.saveChoice(2, choice);
                setPlayerTurn(GameEngine.getPlayer(1));
                setTurn(1);
            } break;
        }
        setTurnCount(turnCount+1);
        console.log(playerTurn, turn, turnCount);

        if(turnCount === 2) {
            setTurnCount(1);
            console.log("vs Player", GameEngine.calculateRound());
        }
    }

    const simulateComputerPlay = () => {
        GameEngine.computerPlay();
        setTimeout(() => {
            setComputerTurn(false);
            setTurn(1);
            setTurnCount(1);
            setPlayerTurn(GameEngine.getPlayer(1));
            console.log("vs AI", GameEngine.calculateRound());
        }, 1000);
    }

    return(
        <div className="max-w-xl rounded overflow-hidden shadow-md bg-white">
            <div className="font-bold text-xl text-center mt-2">Turno del {playerTurn}</div>
            <div className="px-12 py-8">
                    { 
                        computerTurn ?
                        <div className="flex justify-center">
                            <span><p>El computador está pensando. Aguarde un momento por favor...</p></span> 
                        </div>
                        :
                        <div className="flex justify-center">
                            <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Piedra" src={rock} onClick={() => togglePlay("rock")}/>
                            <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Papel" src={paper} onClick={() => togglePlay("paper")}/>
                            <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Tijeras" src={scissors} onClick={() => togglePlay("scissors")}/>
                            <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Lagarto" src={lizard} onClick={() => togglePlay("lizard")}/>
                            <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Spock" src={spock} onClick={() => togglePlay("spock")}/>
                        </div>
                    }
            </div>
        </div>
    );
}