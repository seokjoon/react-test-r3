import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'
import AsyncAwaitAxiosV from './AsyncAwaitAxiosV'
import AsyncHookPromiseV from './AsyncHookPromiseV'

const AsyncV = () => {

  const path = r3Const.pathPublic + '/async'

  return (
    <div>
      <h3>AsyncV</h3>
      <ul>
        <li> <Link to={path + '/asyncAwaitAxios'} >AsyncAwaitAxios</Link> </li>
        <li> <Link to={path + '/asyncHookPromise'} >AsyncHookPromise</Link> </li>
      </ul>
      <div>
        <div><Route path={path + '/asyncAwaitAxios'} component={AsyncAwaitAxiosV} /></div>
        <div><Route path={path + '/asyncHookPromise'} component={AsyncHookPromiseV} /></div>
      </div>
    </div>
  )
}

export default AsyncV