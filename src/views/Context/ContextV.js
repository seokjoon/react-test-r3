import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import ContextFooV from './ContextFooV'
import ContextDynamicV from './ContextDynamicV'

const ContextV = () => {

  const path = r3Const.pathPublic + '/context'

  return (
    <div>
      <h3>ContextV</h3>
      <ul>
        <li><Link to={path + '/contextFoo'}>ContextFoo</Link></li>
        <li><Link to={path + '/contextDynamic'}>ContextDynamic</Link></li>
      </ul>
      <div>
        <div><Route path={path + '/contextFoo'} component={ContextFooV} /></div>
        <div><Route path={path + '/contextDynamic'} component={ContextDynamicV} /></div>
      </div>
    </div>
  )
}

export default ContextV