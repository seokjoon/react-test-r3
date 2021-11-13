import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Outlet, } from 'react-router-dom'

const AsyncV = () => {

  const path = r3Const.pathPublic + '/async'

  return (
    <div>
      <h3>AsyncV</h3>
      <ul>
        <li> <Link to={path + '/asyncAwaitAxios'} >AsyncAwaitAxios</Link> </li>
        <li> <Link to={path + '/asyncHookPromise'} >AsyncHookPromise</Link> </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AsyncV