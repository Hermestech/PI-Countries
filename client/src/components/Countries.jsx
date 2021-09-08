import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CountryCard from './CountryCard';
import { showCountries, unmountCountries } from '../actions';

import './styles/Countries.css'

function Countries() {
    const dispatch = useDispatch();
    const { countries } = useSelector(state => state);

    useEffect(() => {dispatch(showCountries());
        return () => {
            dispatch(unmountCountries());
        }
    }, [ dispatch ])

    return (
        <section className='Container'>
            {
                countries && countries.map(country => <CountryCard key={country.id} country={country}/>)
            }
        </section>
    )
}

export default Countries
