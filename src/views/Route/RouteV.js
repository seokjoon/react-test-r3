import React from 'react'
import { Link, Outlet, } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'

const RouteV = () => {

  const {
    article,
    async,
    context,
    hook,
    immutable,
    index,
    middleware,
    optima,
    redux,
    route,
    split,
    style,
    user
  } = r3Const.path

  return (
    <div>

      <div style={{ float: 'left', width: '30%', }}>
        <ul>
          <li><Link to={index}>Index</Link></li>
          <li><Link to={article}>Article</Link></li>
          <li><Link to={async}>Async</Link></li>
          <li><Link to={context}>Context</Link></li>
          <li><Link to={hook}>Hook</Link></li>
          <li><Link to={immutable}>Immutable</Link></li>
          <li><Link to={middleware}>Middleware</Link></li>
          <li><Link to={optima}>Optima</Link></li>
          <li><Link to={redux}>Redux</Link></li>
          <li><Link to={route}>Route</Link></li>
          <li><Link to={split}>Split</Link></li>
          <li><Link to={style}>Style</Link></li>
          <li><Link to={user}>User</Link></li>
        </ul>
      </div>

      <div style={{ float: 'left', width: '70%', }}>
        <Outlet />
      </div>

      <div style={{ clear: 'both' }} />

    </div>
  )
}

export default RouteV