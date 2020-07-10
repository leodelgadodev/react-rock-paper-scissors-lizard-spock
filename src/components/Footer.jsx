import React from 'react';

export default function Footer() {
    return(
        <div className="bg-1 p-6">
            <div className="text-xs xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 
            text-gray-100 text-right flex justify-end"> 
                <div>
                    <p>Realizado por <a href="https://github.com/leodelgadodev" className="link font-extrabold">leodelgadodev</a></p>
                    <p>Trabajo Final | Construcción de Interfaces de Usuario</p>
                    <p>Universidad Nacional de Quilmes</p>
                </div>
            </div>
        </div>
    );
}