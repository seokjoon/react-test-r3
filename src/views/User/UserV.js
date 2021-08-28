import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'
import UserCreateTokenV from './UserCreateTokenV'
import UserCreateV from './UserCreateV'
import UserCreateHeadContainerV from './UserCreateHeadContainerV'

const UserV = () => {
  const path = r3Const.pathPublic + '/user'

  return (
    <div>
      <h3>UserV</h3>
      <ul>
        <li><Link to={path + '/create'}>UserCreate</Link></li>
        <li><Link to={path + '/createToken'}>UserCreateToken</Link></li>
      </ul>
      <UserCreateHeadContainerV />
      <div>
        <Route path={path + '/create'} component={UserCreateV} />
        <Route path={path + '/createToken'} component={UserCreateTokenV} />
      </div>
    </div>
  )
}

export default UserV