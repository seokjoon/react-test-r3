import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import RouteFooV from './RouteFooV'

const RouteNavLinkV = () => {

  const path = r3Const.pathPublic + '/route/navLink'

  const cssFoo = {
    background: 'yellow',
    color: 'green',
  }

  return (
    <div>
      <h3>RouteNavLinkV</h3>
      <ul>
        <li><NavLink to={path + '/foo'} activeStyle={cssFoo}>FOO</NavLink></li>
        <li><NavLink to={path + '/bar'} activeStyle={cssFoo}>BAR</NavLink></li>
      </ul>
    </div>
  )
}

export default RouteNavLinkV