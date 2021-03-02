import React from 'react'
import { Route } from 'react-router-dom'
import { Game } from '../Components/Game/Game'
import { Home } from '../Components/Home'

export const Routes = () => {
    return (
        <div>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/game" component = {Game}/>
        </div>
    )
}

