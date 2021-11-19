import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserCreateHeadContainerV from './UserCreateHeadContainerV'

const UserV = () => {
  return (
    <div>
      <h3>UserV</h3>
      <ul>
        <li><Link to={'create'}>UserCreate</Link></li>
        <li><Link to={'createToken'}>UserCreateToken</Link></li>
      </ul>
      <UserCreateHeadContainerV />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default UserV