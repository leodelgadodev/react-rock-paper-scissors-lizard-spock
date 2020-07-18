import React, { useEffect } from 'react';
import Game from '../components/Game';
import GameEngine from '../model/GameEngine';
import { useLocation } from 'react-router-dom';


export default function GamePage() {
    
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const urlMode = urlParams.get('mode');
    
    useEffect(() => {
        GameEngine.configureMode(urlMode);
    }, [])

    return(<Game/>); 
}