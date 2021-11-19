import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MiddlewareV = () => {
  return (
    <div>
      <h3>MiddlewareV</h3>
      <ul>
        <li><Link to={'counter'}>MiddlewareCounter</Link></li>
        <li><Link to={'counterThunk'}>MiddlewareCounterThunk</Link></li>
        <li><Link to={'counterSaga'}>MiddlewareCounterSaga</Link></li>
        <li><Link to={'apiThunk'}>MiddlewareApiThunk</Link></li>
        <li><Link to={'apiSaga'}>MiddlewareApiSaga</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MiddlewareV