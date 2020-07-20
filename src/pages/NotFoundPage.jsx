import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {

    return(
        <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-black text-white">404 NOT FOUND</h1>
            <button className="bg-blue-700 
                hover:bg-blue-400 text-white font-bold py-2 px-4 
                border-b-4 border-blue-800 hover:border-blue-500 
                rounded mt-2 mb-2">
                    <Link to="/">Volver</Link>
                </button>
        </div>
    );
}