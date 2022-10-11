
import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getDetails } from "../actions";
import { useEffect } from "react";
import './Estilos/Detail.css'

export default function GetDetailsCountry(props){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(props.match.params.id))
    })

    const myCountry = useSelector((state) => state.detail)

    return (
        <div>
            {
                myCountry
                ?<div>
                    <img className="img2" src={myCountry.flags} alt='country'/>
                    <h1 >{myCountry.name}</h1>
                    <div>
                        <div>
                            <h4>Id: {myCountry.id}</h4>
                            <h4>Continent: {myCountry.continents}</h4>
                            <h4>Capital: {myCountry.capital}</h4>
                            <h4>Subregion: {myCountry.subregion}</h4>
                            <h4>Area: {myCountry.area}</h4>
                            <h4>Population: {myCountry.population}</h4>
                            <Link to= '/home' ><button >Volver</button></Link>
                        </div>
                        <div>
                            {
                                myCountry.activities && myCountry.activities.length  
                                ? myCountry.activities.map(el =>
                                    <li><span>{el.name} </span>      
                                        <p>Dificultad: <span>{el.dificultad}</span></p>   
                                        <p>Duracion: <span>{el.duracion}</span> Hs</p>   
                                        <p>Temp: <span>{el.temporada}</span></p> 
                                    </li>) 
                                : <h3>Sin actividades</h3>
                            }
                        </div>
                    </div>
                </div> 
                : <div>
                    <p>Loading...</p> 
                </div>
            }
            
        </div>
    )
}