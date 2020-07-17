import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import GameElem from './GameElem';

import lizard from '../resources/lizard.svg';
import rock from '../resources/rock.svg';
import paper from '../resources/paper.svg';
import scissors from '../resources/scissors.svg';
import spock from '../resources/spock.svg';

import GameEngine from '../model/GameEngine';

export default function Game() {

    const location = useLocation();
    const [playerTurn, setPlayerTurn] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const urlMode = urlParams.get('mode');
        GameEngine.configureMode(urlMode);
        setPlayerTurn(GameEngine.getPlayer(1));
        
        
    }, []);



    return(
        <div className="max-w-xl rounded overflow-hidden shadow-md bg-white">
            <div className="font-bold text-xl text-center mt-2">Turno del {playerTurn} {mode}</div>
            <div className="px-12 py-8">
                <div className="flex justify-center">
                    <GameElem src={rock} type={"rock"} />
                    <GameElem src={paper} type={"paper"} />
                    <GameElem src={scissors} type={"scissors"} />
                    <GameElem src={lizard} type={"lizard"} />
                    <GameElem src={spock} type={"spock"} />
                </div>
            </div>
        </div>
    );
}