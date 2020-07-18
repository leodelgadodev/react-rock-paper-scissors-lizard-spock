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

    useEffect(() => {
        setPlayerTurn(GameEngine.getCurrentPlayer());
        console.log('turno de ' + playerTurn);
    }, [playerTurn]);

    const togglePlay = (choice) => {
        GameEngine.togglePlay(choice);
    }

    return(
        <div className="max-w-xl rounded overflow-hidden shadow-md bg-white">
            <div className="font-bold text-xl text-center mt-2">Turno del {playerTurn}</div>
            <div className="px-12 py-8">
                <div className="flex justify-center">
                    <img className="h-16 w-16 rounded-full game-elem mx-2" src={rock} onClick={() => togglePlay("rock")}/>
                    <img className="h-16 w-16 rounded-full game-elem mx-2" src={paper} onClick={() => togglePlay("paper")}/>
                    <img className="h-16 w-16 rounded-full game-elem mx-2" src={scissors} onClick={() => togglePlay("scissors")}/>
                    <img className="h-16 w-16 rounded-full game-elem mx-2" src={lizard} onClick={() => togglePlay("lizard")}/>
                    <img className="h-16 w-16 rounded-full game-elem mx-2" src={spock} onClick={() => togglePlay("spock")}/>
                </div>
            </div>
        </div>
    );
}