import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RouteSwitchV = () => {
  return (
    <div>
      <h3>RouteSwitchV</h3>
      <ul>
        <li> <Link to={'foo'}>FOO</Link> </li>
        <li> <Link to={'bar'}>BAR</Link> </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default RouteSwitchV