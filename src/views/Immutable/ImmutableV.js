import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import ImmutableLegacyV from './ImmutableLegacyV'
import ImmutableImmerV from './ImmutableImmerV'

const ImmutableV = () => {

  const path = r3Const.pathPublic + '/immutable'

  return (
    <div>
      <h3>ImmutableV</h3>
      <ul>
        <li> <Link to={path + '/legacy'}>legacy</Link> </li>
        <li> <Link to={path + '/immer'}>immer</Link> </li>
      </ul>
      <div>
        <Route path={path + '/legacy'} component={ImmutableLegacyV} />
        <Route path={path + '/immer'} component={ImmutableImmerV} />
      </div>
    </div>
  )
}

export default ImmutableV