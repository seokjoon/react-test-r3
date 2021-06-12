import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import OptimaV from '../Optima/OptimaV'
import HookV from '../Hook/HookV'
import RouteIndexV from './RouteIndexV'
import RouteRouteV from './RouteRouteV'
import StyleV from '../Style/StyleV'

const RouteV = () => {

  const path = r3Const.pathPublic

  return (
    <div>
      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={path}>Index</Link> </li>
          <li> <Link to={path + '/hook'}>Hook</Link> </li>
          <li> <Link to={path + '/optima'}>Optima</Link> </li>
          <li> <Link to={path + '/route'}>Route</Link> </li>
          <li> <Link to={path + '/style'}>Style</Link> </li>
        </ul>
      </div>
      <div style={{float:'left', width: '70%',}}>
        <Route path={path + '/'} component={RouteIndexV} exact />
        <Route path={path + '/hook'} component={HookV} />
        <Route path={path + '/optima'} component={OptimaV} />
        <Route path={path + '/route'} component={RouteRouteV} />
        <Route path={path + '/style'} component={StyleV} />
      </div>
      <div style={{clear: 'both'}}> </div>
    </div>
  )
}

export default RouteV