import React, { Fragment } from 'react'

const textMap = {
  create: '사용자 등록',
  createToken: '로그인',
}

const UserCreateComV = ({ form, type, onChange, onSubmit, }) => {

  const text = textMap[type]

  const outCreateInput = (
    <input
      autoComplete="password-new" name="passwordConfirm" placeholder="password confirm" type="password"
      onChange={onChange}
      value={form.passwordConfirm}
    />
  )

  const outCreateTokenInput = (<Fragment>
    <input
      autoComplete="username" name="username" placeholder="username"
      onChange={onChange}
      value={form.username}
    />
    <input
      autoComplete="password" name="password" placeholder="password" type="password"
      onChange={onChange}
      value={form.password}
    />
  </Fragment>)

  const outs = (
    <div>
      <h3>UserCreateComV: { text }</h3>
      <div>
        <form onSubmit={onSubmit}>
          { outCreateTokenInput }
          { (type === 'create') && outCreateInput }
          <button>{ text }</button>
        </form>
      </div>
    </div>
  )

  return (outs)
}

export default UserCreateComV