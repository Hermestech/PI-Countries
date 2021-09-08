import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home'
import Landing from '../pages/Landing';
 
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/main' component={Home} />
        </Switch>
    )
}

export default Routes
