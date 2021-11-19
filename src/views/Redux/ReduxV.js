import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReduxV = () => {
  return (
    <div>
      <h3>ReduxV</h3>
      <ul>
        <li><Link to={'reduxCounter'}>ReduxCounter</Link></li>
        <li><Link to={'reduxTodo'}>ReduxTodo</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ReduxV