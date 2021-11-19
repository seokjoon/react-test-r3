import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ImmutableV = () => {

  return (
    <div>
      <h3>ImmutableV</h3>
      <ul>
        <li> <Link to={'legacy'}>legacy</Link> </li>
        <li> <Link to={'immer'}>immer</Link> </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ImmutableV