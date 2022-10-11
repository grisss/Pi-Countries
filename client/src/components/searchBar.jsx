import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchName } from "../actions";
import './Estilos/Search.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getSearchName(name))
    }

    return (
        <div className="search">
            <input type='text' placeholder='Nombre...'
            onChange={e => handleInputChange(e)}></input>
            <button className='btn' type='submit' onClick={e => handleSubmit(e)}>Buscar</button>
        </div>
    )
}