import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Outlet,} from 'react-router-dom'

const HookV = () => {

  const path = r3Const.pathPublic + '/hook'

  return (
    <div>
      <h3>HookV</h3>
      <ul>
        <li><Link to={path + '/useCustom'}>HookUseCustom</Link></li>
        <li><Link to={path + '/useCallback'}>HookUseCallback</Link></li>
        <li><Link to={path + '/useMemo'}>HookUseMemo</Link></li>
        <li><Link to={path + '/useReducerInput'}>HookUseReducerInput</Link></li>
        <li><Link to={path + '/useReducer'}>HookUseReducer</Link></li>
        <li><Link to={path + '/useEffect'}>HookUseEffect</Link></li>
        <li><Link to={path + '/useState'}>HookUseState</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default HookV