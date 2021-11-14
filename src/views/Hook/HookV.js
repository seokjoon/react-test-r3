import React from 'react'
import { Link, Outlet,} from 'react-router-dom'

const HookV = () => {
  return (
    <div>
      <h3>HookV</h3>
      <ul>
        <li><Link to={'useCustom'}>HookUseCustom</Link></li>
        <li><Link to={'useCallback'}>HookUseCallback</Link></li>
        <li><Link to={'useMemo'}>HookUseMemo</Link></li>
        <li><Link to={'useReducerInput'}>HookUseReducerInput</Link></li>
        <li><Link to={'useReducer'}>HookUseReducer</Link></li>
        <li><Link to={'useEffect'}>HookUseEffect</Link></li>
        <li><Link to={'useState'}>HookUseState</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default HookV