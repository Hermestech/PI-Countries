import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CountryCard from './CountryCard';
import { showCountries, unmountCountries } from '../actions';


function Countries() {
    const dispatch = useDispatch();
    const { countries } = useSelector(state => state);

    useEffect(() => {dispatch(showCountries());
        return () => {
            dispatch(unmountCountries());
        }
    }, [ dispatch ])

    return (
        <div>
            {
                countries && countries.map(country => <CountryCard key={country.id} country={country}/>)
            }
        </div>
    )
}

export default Countries
