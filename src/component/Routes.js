import React from 'react'
import AppTra from "./AppTra"
import { NavLink, Route } from "react-router-dom"
import AppTer from './AppTer'

const Routes=()=> {
    return(
        <div>
            <ul className='nav nav-pills'>
                <li><NavLink to="/appter">AppTer</NavLink></li>
                <li><NavLink to="/apptra">AppTra</NavLink></li>
            </ul>
            <Route path='/appter' exact component={AppTer} />
            <Route path='/navigate' exact component={AppTra} />
        </div>
    )
}

export default Routes;