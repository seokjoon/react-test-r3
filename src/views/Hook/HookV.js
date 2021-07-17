import React from 'react'
import HookUseStateV from './HookUseStateV'
import HookUseEffectV from './HookUseEffectV'
import HookUseReducerV from './HookUseReducerV'
import HookUseReducerInputV from './HookUseReducerInputV'
import HookUseMemoV from './HookUseMemoV'
import HookUseCallbackV from './HookUseCallbackV'
import HookUseCustomV from './HookUseCustomV'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'

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
        <Route path={path + '/useCustom'} component={HookUseCustomV} />
        <Route path={path + '/useCallback'} component={HookUseCallbackV} />
        <Route path={path + '/useMemo'} component={HookUseMemoV} />
        <Route path={path + '/useReducerInput'} component={HookUseReducerInputV} />
        <Route path={path + '/useReducer'} component={HookUseReducerV} />
        <Route path={path + '/useEffect'} component={HookUseEffectV} />
        <Route path={path + '/useState'} component={HookUseStateV} />
      </div>
    </div>
  )
}

export default HookV