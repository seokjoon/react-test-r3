import React from 'react'
import { Link } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'

const RouteRouteView = () => {

  const pathPrefix = r3Const.pathPublic

  return (
    <div>
      <h3>RouteRouteView</h3>
      <div>
        <li> <Link to={pathPrefix + '/err'}>Error</Link> </li>
        <li> <Link to={pathPrefix + '/na'}>NotFound</Link> </li>
        <li> <Link to={pathPrefix + '/urlParam/bar'}>UrlParam</Link> </li>
        <li> <Link to={pathPrefix + '/urlQuery?foo=bar'}>UrlQuery</Link> </li>
      </div>
      <div>
      </div>
    </div>
  )
}

export default RouteRouteView