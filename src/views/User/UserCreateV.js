import React from 'react'
import UserCreateContainerV from './UserCreateContainerV'
import r3Api from '../../helpers/r3Api'

const UserCreateV = () => {

  const foo = async () => {
    const res = await r3Api.user.foo()
    console.log(res.data)
  }

  return (
    <div>
      <h3>UserCreateV</h3>
      <div>
        <button onClick={foo}>foo</button>
        <UserCreateContainerV />
      </div>
    </div>
  )
}

export default UserCreateV
