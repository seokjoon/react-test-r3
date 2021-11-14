import React from 'react'
import { Link, Outlet, } from 'react-router-dom'

const AsyncV = () => {
  return (
    <div>
      <h3>AsyncV</h3>
      <ul>
        <li> <Link to={'asyncAwaitAxios'} >AsyncAwaitAxios</Link> </li>
        <li> <Link to={'asyncHookPromise'} >AsyncHookPromise</Link> </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AsyncV