import React from 'react'
import OptimaListV from './OptimaListV'
import OptimaScrollV from './OptimaScrollV'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'

const OptimaV = () => {

  const path = r3Const.pathPublic + '/optima'

  return (
    <div>
      <h3>OptimaV</h3>
      <ul>
        <li> <Link to={path + '/scroll'}>OptimaScroll</Link></li>
        <li> <Link to={path + '/list'}>OptimaList</Link></li>
      </ul>
      <div>
        <Route path={path + '/scroll'} component={OptimaScrollV} />
        <Route path={path + '/list'} component={OptimaListV} />
      </div>
    </div>
  )
}

export default OptimaV