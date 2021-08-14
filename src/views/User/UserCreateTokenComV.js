import React from 'react'

const textMap = {
  create: '사용자 등록',
  createToken: '로그인',
}

const UserCreateTokenComV = ({ form, type, onChange, onSubmit, }) => {

  const text = textMap[type]

  return (
    <div>
      <h3>UserCreateTokenComV</h3>
      <div>
        <form>
          <input autoComplete="username" name="username" placeholder="username" />
          <input autoComplete="password" name="password" placeholder="password" type="password" />
          <button>{ text }</button>
        </form>
      </div>
    </div>
  )
}

export default UserCreateTokenComV