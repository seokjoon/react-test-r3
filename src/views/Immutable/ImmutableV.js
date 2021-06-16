import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import ImmutableLegacyV from './ImmutableLegacyV'

const ImmutableV = () => {

  const path = r3Const.pathPublic + '/immutable'

  return (
    <div>
      <h3>ImmutableV</h3>
      <ul>
        <li>
          <Link to={path + '/legacy'}>legacy</Link>
        </li>
      </ul>
      <div>
        <Route path={path + '/legacy'} component={ImmutableLegacyV} />
      </div>
    </div>
  )
}

export default ImmutableV