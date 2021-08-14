import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import OptimaV from '../Optima/OptimaV'
import HookV from '../Hook/HookV'
import RouteIndexV from './RouteIndexV'
import RouteRouteV from './RouteRouteV'
import StyleV from '../Style/StyleV'
import ImmutableV from '../Immutable/ImmutableV'
import AsyncV from '../Async/AsyncV'
import ContextV from '../Context/ContextV'
import ReduxV from '../Redux/ReduxV'
import MiddlewareV from '../Middleware/MiddlewareV'
import SplitV from '../Split/SplitV'
import UserV from '../User/UserV'
import ArticleV from '../Article/ArticleV'

const RouteV = () => {

  const path = r3Const.pathPublic

  return (
    <div>
      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={path}>Index</Link> </li>
          <li> <Link to={path + '/article'}>Article</Link> </li>
          <li> <Link to={path + '/async'}>Async</Link> </li>
          <li> <Link to={path + '/context'}>Context</Link> </li>
          <li> <Link to={path + '/hook'}>Hook</Link> </li>
          <li> <Link to={path + '/immutable'}>Immutable</Link> </li>
          <li> <Link to={path + '/middleware'}>Middleware</Link> </li>
          <li> <Link to={path + '/optima'}>Optima</Link> </li>
          <li> <Link to={path + '/redux'}>Redux</Link> </li>
          <li> <Link to={path + '/route'}>Route</Link> </li>
          <li> <Link to={path + '/split'}>Split</Link> </li>
          <li> <Link to={path + '/style'}>Style</Link> </li>
          <li> <Link to={path + '/user'}>User</Link> </li>
        </ul>
      </div>
      <div style={{float:'left', width: '70%',}}>
        <Route path={path + '/'} component={RouteIndexV} exact />
        <Route path={path + '/article'} component={ArticleV} />
        <Route path={path + '/async'} component={AsyncV} />
        <Route path={path + '/context'} component={ContextV} />
        <Route path={path + '/hook'} component={HookV} />
        <Route path={path + '/immutable'} component={ImmutableV} />
        <Route path={path + '/middleware'} component={MiddlewareV} />
        <Route path={path + '/optima'} component={OptimaV} />
        <Route path={path + '/redux'} component={ReduxV} />
        <Route path={path + '/route'} component={RouteRouteV} />
        <Route path={path + '/split'} component={SplitV} />
        <Route path={path + '/style'} component={StyleV} />
        <Route path={path + '/user'} component={UserV} />
      </div>
      <div style={{clear: 'both'}}> </div>
    </div>
  )
}

export default RouteV