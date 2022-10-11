import React from 'react';
import './Estilos/Card.css'

export default function Card ({name, flags, continents}) {

    return (
        <div className='card'> 
            <img className='imagen' src={flags} alt=''/>
            <div className='name'>
                <h3>{name}</h3>
            </div>
            <div>
            <h5 className='continent'>{continents}</h5>
            </div>
        
        </div>
    )
}