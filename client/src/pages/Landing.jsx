import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';

const Landing = () => {
    return (
        <div>
            <Link to='/main'>
              Apretá y mira qué lindo
            </Link>
        </div>
    )
}

export default Landing;
