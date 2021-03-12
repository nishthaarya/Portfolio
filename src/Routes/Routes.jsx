import React from 'react'
import {Route} from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import {Game} from "../Pages/Game/Game";

export const Routes = () => {
    return (
        <div>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/game" component = {Game}/>
        </div>
    )
}

