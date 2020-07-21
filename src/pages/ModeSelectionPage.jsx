import React from 'react';
import ModeSelector from '../components/ModeSelector';
import { useEffect } from 'react';
import GameEngine from '../model/GameEngine';


export default function ModeSelectionPage() {

    useEffect(() => {
        GameEngine.resetPlayers();
        GameEngine.resetElections();
        GameEngine.resetScore();
    })

    return(
        <ModeSelector/>
    );
}