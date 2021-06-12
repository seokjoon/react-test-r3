import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import RouteMultiV from './RouteMultiV'
import RouteUrlParamV from './RouteUrlParamV'
import RouteUrlQueryV from './RouteUrlQueryV'
import RouteHistoryV from './RouteHistoryV'
import RouteWithRouterV from './RouteWithRouterV'
import RouteSwitchV from './RouteSwitchV'
import RouteNavLinkV from './RouteNavLinkV'

const RouteRouteV = () => {

  const path = r3Const.pathPublic + '/route'

  return (
    <div>
      <h3>RouteRouteV</h3>
      <div>
        <ul>
          <li><Link to={path + '/err'}>Error</Link></li>
          <li><Link to={path + '/history'}>History</Link></li>
          <li><Link to={path + '/na'}>NotFound</Link></li>
          <li><Link to={path + '/navLink'}>NavLink</Link></li>
          <li><Link to={path + '/switch'}>Switch</Link></li>
          <li><Link to={path + '/urlParam/bar'}>UrlParam</Link></li>
          <li><Link to={path + '/urlQuery?foo=bar'}>UrlQuery</Link></li>
        </ul>
      </div>
      <div>
        <Route path={[path + '/err', path + '/na']} component={RouteMultiV}/>
        <Route path={path + '/history'} component={RouteHistoryV}/>
        <Route path={path + '/navLink'} component={RouteNavLinkV} />
        <Route path={path + '/switch'} component={RouteSwitchV}/>
        <Route path={path + '/urlParam/:foo'} component={RouteUrlParamV}/>
        <Route path={path + '/urlQuery'} component={RouteUrlQueryV}/>
      </div>
      <div>
        <RouteWithRouterV/>
      </div>
    </div>
  )
}

export default RouteRouteV