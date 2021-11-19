import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RouteNavLinkV = () => {
  const cssFoo = {
    background: 'yellow',
    color: 'green',
  }

  return (
    <div>
      <h3>RouteNavLinkV</h3>
      <ul>
        <li><NavLink to={'foo'} syle={cssFoo} end>FOO</NavLink></li>
        <li><NavLink to={'bar'} style={cssFoo} end>BAR</NavLink></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default RouteNavLinkV