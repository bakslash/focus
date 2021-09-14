  
import React from 'react'
import ProductList from './components/products'
import Details from './components/details'

import {  Route, Switch } from 'react-router-dom'

export default function routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/:name" component={Details} />
                
            </Switch>

        </>
    )
}