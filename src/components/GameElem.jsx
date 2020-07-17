import React, { useState, useEffect } from 'react';
import GameEngine from '../model/GameEngine';

export default function GameElem(props) {

    const [type, setType] = useState("");

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        setType(props.type)
    }, [])

    const handleClick = () => {
        GameEngine.togglePlay(type);
    }

    return(
        // eslint-disable-next-line react/prop-types
        <img className="h-16 w-16 rounded-full game-elem mx-2" src={props.src} onClick={() => handleClick()}/>
    );
}