import React from 'react'
import './styles/CountryCard.css'

function CountryCard({ country }) {

    
    return (
        <article className='card__container'>
        <img src={country.flag_image} alt="bandera" />
        <h4>{country.name}</h4>
        <h5>{country.continent}</h5>
        </article>
    )
}

export default CountryCard
