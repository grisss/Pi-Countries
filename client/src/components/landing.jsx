import React from 'react'
import { Link } from 'react-router-dom'
import "./Estilos/Landing.css";
import IMG from './Imagenes/amelia.jpg'

export default function LandingPage() {
    return(
        <div name="landing" >
            <h1  className="title1" >BIENVENIDOS A MI PI </h1>
            <Link to='/home'>
                <button className='button1' >Ingresar</button>
            </Link>
            <img className='lorem2' src={IMG} alt=''/>
            <hr className='h'/>
        </div>
    )
}