import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import lizard from '../resources/lizard.svg';
import rock from '../resources/rock.svg';
import paper from '../resources/paper.svg';
import scissors from '../resources/scissors.svg';
import spock from '../resources/spock.svg';

import GameEngine from '../model/GameEngine';
import EndgameMsg from './EndgameMsg';
import BtnLink from './BtnLink';

export default function Game() {

    const [playerTurn, setPlayerTurn] = useState("");
    const [turn, setTurn] = useState(1);
    const [turnCount, setTurnCount] = useState(1);
    const [computerTurn, setComputerTurn] = useState(false);
    const [endgame, setEndgame] = useState(false);
    const [resultsJson, setResultsJson] = useState({});
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const urlMode = urlParams.get('mode');

    useEffect(() => {
        GameEngine.configureMode(urlMode);
        setPlayerTurn(GameEngine.getPlayer(1));
        setScore1(GameEngine.getScore(1));
        setScore2(GameEngine.getScore(2));
        if(turn === 2) {
            setPlayerTurn(GameEngine.getPlayer(2));
        }
    }, []);

    const resetState = () => {
        GameEngine.resetElections();
        setEndgame(false);
        setPlayerTurn(GameEngine.getPlayer(1));
        setTurn(1);
        setTurnCount(1);
        setComputerTurn(false);
        setResultsJson({});
    }

    const togglePlay = (choice) => {
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
            } break;
        }

        setTurnCount(turnCount+1);

        if(turnCount === 2) {
            let result = GameEngine.calculateRound();
            setResultsJson(result);
            setEndgame(true);
            updateScore(result);
        }
    }

    const simulateComputerPlay = () => {
        GameEngine.computerPlay();
        setTimeout(() => {
            let result = GameEngine.calculateRound();
            setResultsJson(result);
            setEndgame(true);
            updateScore(result);
        }, 1500);
    }

    const updateScore = (result) => {
        if((result.winner === GameEngine.getPlayer(2))) {
            GameEngine.updateScoreFor(2);
            setScore2(GameEngine.getScore(2));
        } else if(result.winner === GameEngine.getPlayer(1)) {
            GameEngine.updateScoreFor(1); 
            setScore1(GameEngine.getScore(1));
        }
    }

    return(
        <div>
            <div className="max-w-xl rounded overflow-hidden shadow-md text-3xl font-bolder flex justify-between bg-white mb-5">
                <span className="ml-2">{GameEngine.getPlayer(1)} - {score1}</span> 
                <span>-</span>
                <span className="mr-2">{score2} - {GameEngine.getPlayer(2)}</span> 
            </div>

            <div className="max-w-xl rounded overflow-hidden shadow-md bg-white">
                { !endgame ? (
                <div>
                    { playerTurn.length?
                        <div className="font-bold text-xl text-center mt-2">Turno del {playerTurn}</div>
                        : <div></div>
                    }
                    <div className="px-12 py-8">
                        {computerTurn ? (
                            <div className="flex justify-center">
                                <span><p>El computador está pensando. Aguarde un momento por favor...</p></span> 
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Piedra" 
                                    src={rock} onClick={() => togglePlay("Piedra")}/>
                                <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Papel" 
                                    src={paper} onClick={() => togglePlay("Papel")}/>
                                <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Tijeras" 
                                    src={scissors} onClick={() => togglePlay("Tijeras")}/>
                                <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Lagarto" 
                                    src={lizard} onClick={() => togglePlay("Lagarto")}/>
                                <img className="h-16 w-16 rounded-full game-elem mx-2" alt="Spock" 
                                    src={spock} onClick={() => togglePlay("Spock")}/>
                            </div>
                        )}
                    </div>
                </div>
                ) : (
                <div className="flex flex-col justify-center px-12 py-8">
                    <EndgameMsg results={resultsJson} />
                    <button className="bg-blue-700 
                    hover:bg-blue-400 text-white font-bold py-2
                    border-b-4 border-blue-800 hover:border-blue-500 
                    rounded mt-5 mb-2" onClick={() => resetState()}>
                        Jugar otra Ronda
                    </button>
                    <BtnLink url="/" text="Jugar una partida de Cero"/>
                </div>
                )}
            </div>
        </div>
    );
}