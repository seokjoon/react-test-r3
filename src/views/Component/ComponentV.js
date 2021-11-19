import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ComponentV = () => {
  return (
    <div>
      <h3>ComponentV</h3>
      <ul>
        <Link to={'props'}>ComponentPropsV</Link>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ComponentV