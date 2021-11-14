import React from 'react'
import { Link, Outlet, } from 'react-router-dom'

const ContextV = () => {
  return (
    <div>
      <h3>ContextV</h3>
      <ul>
        <li><Link to={'contextFoo'}>ContextFoo</Link></li>
        <li><Link to={'contextDynamic'}>ContextDynamic</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ContextV