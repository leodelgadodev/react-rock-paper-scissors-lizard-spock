/* eslint-disable react/prop-types */
import React from 'react';

export default function EndgameMsg(props) {

    return(
        <div>
            {props.results.winner? 
            <div className="font-bold text-xl text-center">
                <span>
                    HA GANADO EL {props.results.winner} !!!!
                </span><br/>
                <span>
                    El {props.results.winner} ganó eligiendo &ldquo;{props.results.choice}&ldquo;.
                </span>
            </div>
            : 
            <span className="font-bold text-xl">
                HA OCURRIDO UN EMPATE!
            </span>
            }
        </div>
    )
}