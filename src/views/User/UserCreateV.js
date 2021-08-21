import React from 'react'
import UserCreateContainerV from './UserCreateContainerV'
import r3Api from '../../helpers/r3Api'

const UserCreateV = () => {

  const checkToken = async () => {
    try {
      const res = await r3Api.user.checkToken()
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h3>UserCreateV</h3>
      <div>
        <button onClick={checkToken}>checkToken</button>
        <UserCreateContainerV />
      </div>
    </div>
  )
}

export default UserCreateV
