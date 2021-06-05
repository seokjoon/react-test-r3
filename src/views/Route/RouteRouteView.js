import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import RouteMultiView from './RouteMultiView'
import RouteUrlParamView from './RouteUrlParamView'
import RouteUrlQueryView from './RouteUrlQueryView'

const RouteRouteView = () => {

  const path = r3Const.pathPublic + '/route'

  return (
    <div>
      <h3>RouteRouteView</h3>
      <div>
        <li> <Link to={path + '/err'}>Error</Link> </li>
        <li> <Link to={path + '/na'}>NotFound</Link> </li>
        <li> <Link to={path + '/urlParam/bar'}>UrlParam</Link> </li>
        <li> <Link to={path + '/urlQuery?foo=bar'}>UrlQuery</Link> </li>
      </div>
      <div>
        <Route path={[path + '/err', path + '/na']} component={RouteMultiView} />
        <Route path={path + '/urlParam/:foo'} component={RouteUrlParamView} />
        <Route path={path + '/urlQuery'} component={RouteUrlQueryView} />
      </div>
    </div>
  )
}

export default RouteRouteView