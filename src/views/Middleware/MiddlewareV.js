import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'
import MiddlewareCounterContainerV from './MiddlewareCounterContainerV'

const MiddlewareV = () => {

  const path = r3Const.pathPublic + '/middleware'

  return (
    <div>
      <h3>MiddlewareV</h3>
      <ul>
        <li><Link to={path + '/counter'}>MiddlewareCounter</Link></li>
      </ul>
      <div>
        <div><Route path={path + '/counter'} component={MiddlewareCounterContainerV} /></div>
      </div>
    </div>
  )
}

export default MiddlewareV