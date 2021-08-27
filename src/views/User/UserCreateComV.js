import React, { Fragment } from 'react'
import styled from 'styled-components'

const textMap = {
  create: '사용자 등록',
  createToken: '로그인',
}

const MsgErr = styled.div`
    color: red;
`

const UserCreateComV = ({
  err,
  form,
  onChange,
  onSubmit,
  type,
}) => {

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

  const outErr = (err && <MsgErr>{err}</MsgErr>)

  const outs = (
    <div>
      <h3>UserCreateComV: {text}</h3>
      <div>
        <form onSubmit={onSubmit}>
          {outCreateTokenInput}
          {(type === 'create') && outCreateInput}
          {outErr}
          <button>{text}</button>
        </form>
      </div>
    </div>
  )

  return (outs)
}

export default UserCreateComV