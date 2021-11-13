import React from 'react'
import { Link, Outlet, } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'

const ContextV = () => {

  const path = r3Const.pathPublic + '/context'

  return (
    <div>
      <h3>ContextV</h3>
      <ul>
        <li><Link to={path + '/contextFoo'}>ContextFoo</Link></li>
        <li><Link to={path + '/contextDynamic'}>ContextDynamic</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ContextV