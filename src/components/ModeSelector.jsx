import React from 'react';
import BtnLink from './BtnLink';

export default function ModeSelector() {

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md bg-white">
            <div className="px-12 py-8">
                <div className="font-bold text-xl text-center mb-2">Elija un modo de juego</div>
                <div className="flex flex-col justify-center">
                    <BtnLink url="/game?mode=player" text="Jugador Vs Jugador"/>
                    <BtnLink url="/game?mode=computer" text="Jugador Vs Computador"/>
                </div>
            </div>
        </div>
    );
}