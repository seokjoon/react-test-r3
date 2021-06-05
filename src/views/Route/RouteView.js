import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import OptimaView from '../Optima/OptimaView'
import HookView from '../Hook/HookView'
import RouteIndexView from './RouteIndexView'
import RouteRouteView from './RouteRouteView'
import RouteMultiView from './RouteMultiView'
import RouteUrlParamView from './RouteUrlParamView'

const RouteView = () => {

  const pathPrefix = r3Const.pathPublic

  return (
    <div>
      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={pathPrefix}>Index</Link> </li>
          <li> <Link to={pathPrefix + '/hook'}>Hook</Link> </li>
          <li> <Link to={pathPrefix + '/optima'}>Optima</Link> </li>
          <li> <Link to={pathPrefix + '/route'}>Route</Link> </li>
        </ul>
      </div>
      <div style={{float:'left', width: '70%',}}>
        <Route path={pathPrefix + '/'} component={RouteIndexView} exact={true} />
        <Route path={pathPrefix + '/hook'} component={HookView} exact={true} />
        <Route path={pathPrefix + '/optima'} component={OptimaView} exact={true} />
        <Route path={pathPrefix + '/route'} component={RouteRouteView} exact={true} />
        <Route path={[pathPrefix + '/err', pathPrefix + '/na']} component={RouteMultiView} exact={true} />
        <Route path={pathPrefix + '/urlParam/:foo'} component={RouteUrlParamView} />
      </div>
      <div style={{clear: 'both'}}> </div>
    </div>
  )
}

export default RouteView