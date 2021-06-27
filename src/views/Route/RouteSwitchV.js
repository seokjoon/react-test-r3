import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import RouteFooV from './RouteFooV'
import RouteSwitchDefaultV from './RouteSwitchDefaultV'

const RouteSwitchV = () => {

  const path = r3Const.pathPublic + '/route/switch'

  return (
    <div>
      <h3>RouteSwitchV</h3>
      <ul>
        <li> <Link to={path + '/foo'}>FOO</Link> </li>
        <li> <Link to={path + '/bar'}>BAR</Link> </li>
      </ul>
      <div>
        <Switch>
          <Route path={path + '/foo'} component={RouteFooV} />
          <Route component={RouteSwitchDefaultV} />
        </Switch>
      </div>
    </div>
  )
}

export default RouteSwitchV