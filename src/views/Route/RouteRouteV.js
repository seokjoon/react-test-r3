import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import RouteWithRouterV from './RouteWithRouterV'

const RouteRouteV = () => {
  return (
    <div>
      <h3>RouteRouteV</h3>
      <div>
        <ul>
          <li><Link to={'err'}>Error</Link></li>
          <li><Link to={'history'}>History</Link></li>
          <li><Link to={'na'}>NotFound</Link></li>
          <li><Link to={'navLink'}>NavLink</Link></li>
          <li><Link to={'switch'}>Switch</Link></li>
          <li><Link to={'urlParam/bar'}>UrlParam</Link></li>
          <li><Link to={'urlQuery?foo=bar'}>UrlQuery</Link></li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <RouteWithRouterV/>
      </div>
    </div>
  )
}

export default RouteRouteV