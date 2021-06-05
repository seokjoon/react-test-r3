import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import OptimaView from '../Optima/OptimaView'
import HookView from '../Hook/HookView'
import RouteIndexView from './RouteIndexView'
import RouteErrView from './RouteErrView'

const RouteView = () => {

  const pathPrefix = r3Const.pathPublic

  return (
    <div>
      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={pathPrefix}>Index</Link> </li>
          <li> <Link to={pathPrefix + '/hook'}>Hook</Link> </li>
          <li> <Link to={pathPrefix + '/optima'}>Optima</Link> </li>
        </ul>
      </div>
      <div style={{float:'left', width: '70%',}}>
        <Route path={pathPrefix + '/'} component={RouteIndexView} exact={true} />
        <Route path={pathPrefix + '/hook'} component={HookView} exact={true} />
        <Route path={pathPrefix + '/optima'} component={OptimaView} exact={true} />
        <Route path={[pathPrefix + '/err', pathPrefix + 'notFound']} component={RouteErrView} exact={true} />
      </div>
      <div style={{clear: 'both'}}> </div>
    </div>
  )
}

export default RouteView