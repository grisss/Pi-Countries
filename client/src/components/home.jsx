import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries, getOrderName, getOrderPopu, getContinent, getAllActivities, byActivity } from '../actions'
import Card from './card'
import Paginado from './paginado';
import SearchBar from './searchBar';
import './Estilos/Home.css'

export default function Home() {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //La pagina empieza en la 1
    const [countriesPerPage, setCountriesPerPage] = useState(10) //La pagina tiene 10 x Pagina
    const indexOfLastCountry = currentPage * countriesPerPage // ultimo countri en 10 (1 x 10)
    const indexOfFirstCountry =  indexOfLastCountry - countriesPerPage //// primer countri en 0 (10 - 10)
    const currentCountry = Array.isArray(allCountries) && allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    useEffect(() => {
        dispatch(getAllActivities())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleSortName(e){
        e.preventDefault();
        dispatch(getOrderName(e.target.value))
        setCurrentPage(1)//setear el ordenamiento en la pagina primera
        setOrden(`Orden ${e.target.value}`)
    }

    function handlSortPopu(e){
        e.preventDefault();
        dispatch(getOrderPopu(e.target.value))
        setCurrentPage(1)
        setOrden(`Orden ${e.target.value}`)
    }

    function handleFilterContinent(e){
        dispatch(getContinent(e.target.value))
    }

    function handleByActivity(e){
        e.preventDefault();
        dispatch(byActivity(e.target.value))
    }

    return(
        <div >
            <h1 className='title2' >Paises</h1>
            <button className='buttonR' onClick={e => {handleClick(e)}}> Recargar </button>
            
                <Link to='/create'> 
                <button className='buttonC' >Crear actividad</button> </Link>
           
            {/* nav */}
            <nav >
                <div> <SearchBar /> </div>
                <div >
                    <select className='buttonAD' onClick={e => {handleSortName(e)}}>
                        <option value='asc'> Ascendente </option>
                        <option value='desc'> Descendente </option>
                    </select>
                    <select className='buttonPo' onClick={e => {handlSortPopu(e)}}>
                        <option value='popu'> Poblacion asc </option>
                        <option value='pop'> Poblacion des </option>
                    </select>
                </div >
                {/* filtrado */}
                <div>
                    <select className='buttonCon' onChange={e => handleFilterContinent(e)}>
                        <option value='all'>Continentes</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="South America">South America</option>
                    </select> 
                    <select className='buttonAct' onChange={(e) => handleByActivity(e)}>
                        <option value='All'>All activities</option>
                        {
                            activities.map((el)=> {
                                return (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            })
                        } 
                    </select>
                </div>

            </nav>
            {/*////////////// PAGINADO/COUNTRIES /////////////// */}

            <div>
                {/* area */}
                <div className='container' >
                    {
                        currentCountry ? currentCountry.map((el)=> {
                            return (
                                <div
                                 key={el.id}>
                                    <Link to={'/details/' + el.id}>
                                        <Card flags={el.flags} name={el.name} continents={el.continents} key={el.id}/>
                                    </Link>
                                </div>
                            )
                        }):
                        <div >
                            <Link to={'/details/' + allCountries.id}>
                                <Card 
                                    flags={allCountries.flags} 
                                    name={allCountries.name}
                                    continents={allCountries.continents} 
                                    key={allCountries.id}>
                                </Card>
                            </Link>
                        </div>
                    } 
                </div >
                {/* paginado */}  
                <div > 
                    <Paginado  countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}/>
                </div>
            </div>
        </div>
    )
}