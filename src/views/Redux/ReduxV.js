import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import ReduxCounterV from './ReduxCounterV'
import ReduxTodoV from './ReduxTodoV'

const ReduxV = () => {

  const path = r3Const.pathPublic + '/redux'

  return (
    <div>
      <h3>ReduxV</h3>
      <ul>
        <li><Link to={path + '/reduxCounter'}>ReduxCounter</Link></li>
        <li><Link to={path + '/reduxTodo'}>ReduxTodo</Link></li>
      </ul>
      <div>
        <div><Route path={path + '/reduxCounter'} component={ReduxCounterV} /></div>
        <div><Route path={path + '/reduxTodo'} component={ReduxTodoV} /></div>
      </div>
    </div>
  )
}

export default ReduxV