import React from 'react';
import { Link } from 'react-router-dom';

export default function ModeSelector() {

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md bg-white">
            <div className="px-12 py-8">
                <div className="font-bold text-xl text-center mb-2">Elija un modo de juego</div>
                <div className="flex flex-col justify-center">
                    <button className="bg-blue-700 
                    hover:bg-blue-400 text-white font-bold py-2
                    border-b-4 border-blue-800 hover:border-blue-500 
                    rounded mt-2 mb-2">
                        <Link to="/game?mode=player">Jugador Vs Jugador</Link>
                    </button>
                    <button className="bg-blue-700 
                    hover:bg-blue-400 text-white font-bold py-2
                    border-b-4 border-blue-800 hover:border-blue-500 
                    rounded mt-2 mb-2">
                        <Link to="/game?mode=computer">Jugador Vs Computador</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}