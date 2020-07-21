import React from 'react';
import BtnLink from '../components/BtnLink';

export default function NotFoundPage() {

    return(
        <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-black text-white">404 NOT FOUND</h1>
            <BtnLink url="/" text="Volver"/>
        </div>
    );
}