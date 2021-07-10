import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import SplitStateV from './SplitStateV'
import SplitLazyV from './SplitLazyV'

const SplitV = () => {

  const path = r3Const.pathPublic + '/split'

  return (
    <div>
      <ul>
        <li><Link to={path + '/state'}>SplitStateV</Link></li>
        <li><Link to={path + '/lazy'}>SplitLazyV</Link></li>
      </ul>
      <div>
        <Route path={path + '/state'} component={SplitStateV} />
        <Route path={path + '/lazy'} component={SplitLazyV} />
      </div>
    </div>
  )
}

export default SplitV