import React from 'react';
import './Estilos/Paginado.css'

export default function Paginado({countriesPerPage, allCountries, paginado}) {

    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='numBox'>
            { 
                pageNumbers && 
                    pageNumbers.map(number => (
                 <button className='indexCont' key={number + Math.random} onClick={() => paginado(number)}>{number}</button>
                ))
            }
        </div>
    )

}
