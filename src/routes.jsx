import React from 'react'

import { Routes as Switch, Route } from 'react-router-dom'

import { Landing, Company, Team, Contact } from './pages'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' element={<Landing />} />
            <Route path='/team/' element={<Team />} />
            <Route path='/company/' element={<Company />} />
            <Route path='/contact/' element={<Contact />} />
        </Switch>
    )
}
