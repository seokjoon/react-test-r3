import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import OptimaView from '../Optima/OptimaView'
import HookView from '../Hook/HookView'
import RouteIndexView from './RouteIndexView'
import RouteRouteView from './RouteRouteView'
import RouteMultiView from './RouteMultiView'
import RouteUrlParamView from './RouteUrlParamView'
import RouteUrlQueryView from './RouteUrlQueryView'

const RouteView = () => {

  const path = r3Const.pathPublic

  return (
    <div>
      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={path}>Index</Link> </li>
          <li> <Link to={path + '/hook'}>Hook</Link> </li>
          <li> <Link to={path + '/optima'}>Optima</Link> </li>
          <li> <Link to={path + '/route'}>Route</Link> </li>
        </ul>
      </div>
      <div style={{float:'left', width: '70%',}}>
        <Route path={path + '/'} component={RouteIndexView} exact />
        <Route path={path + '/hook'} component={HookView} />
        <Route path={path + '/optima'} component={OptimaView} />
        <Route path={path + '/route'} component={RouteRouteView} />
      </div>
      <div style={{clear: 'both'}}> </div>
    </div>
  )
}

export default RouteView