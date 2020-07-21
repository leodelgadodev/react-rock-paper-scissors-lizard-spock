/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnLink(props) {
    return(
        <button className="bg-blue-700 
                    hover:bg-blue-400 text-white font-bold py-2
                    border-b-4 border-blue-800 hover:border-blue-500 
                    rounded mt-2 mb-2">
            <Link to={props.url}>{props.text}</Link>
        </button>
    )
}