import React, { useState, useEffect } from 'react';
import Game from '../components/Game';
import { useLocation } from 'react-router-dom'

export default function GamePage() {

    const [mode, setMode] = useState("");
    const location = useLocation();
    
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const urlMode = urlParams.get('mode');
        debugger; setMode(urlMode);
    })

    return(
        <Game mode={mode}/>
    );
}