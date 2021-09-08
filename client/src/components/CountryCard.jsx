import React from 'react'

function CountryCard({ country }) {

    
    return (
        <>
        <h4>{country.name}</h4>
        <img src={country.flag_image} alt="bandera" />

        </>
    )
}

export default CountryCard
