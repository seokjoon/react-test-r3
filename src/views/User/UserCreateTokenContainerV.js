import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userCreateRedux from '../../redux/ducks/userCreateRedux'
import UserCreateComV from './UserCreateComV'
import userRedux from '../../redux/ducks/userRedux'
import { withRouter } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'

const UserCreateTokenContainerV = ({ history }) => {

  const [err, setErr] = useState(null)

  const dispatch = useDispatch()

  const { form, userCreate, userCreateError, user, } = useSelector(({ userCreateRedux, userRedux }) => ({
    form: userCreateRedux.createToken,
    userCreate: userCreateRedux.userCreate,
    userCreateError: userCreateRedux.userCreateError,
    user: userRedux.user,
  }))

  const onChange = e => {
    const { name, value, } = e.target
    dispatch(userCreateRedux.changeField({ form: 'createToken', key: name, val: value, }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const { password, username, } = form
    dispatch(userCreateRedux.createToken({ password, username, }))
  }

  useEffect(() => {
    dispatch(userCreateRedux.initForm('createToken'))
  }, [dispatch])

  useEffect(() => {
    if(userCreateError) {
      console.log('userCreateError: ', userCreateError)
      setErr('createToken failed')
      return 0
    }
    if(userCreate) {
      console.log('userCreate: ', userCreate)
      dispatch(userRedux.check())
    }
  }, [userCreate, userCreateError, dispatch])

  useEffect(() => {
    if(user) {
      history.push(r3Const.pathPublic + '/user')
    }
  }, [history, user])

  return (
    <UserCreateComV
      err={err}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      type="createToken"
    />
  )
}

export default withRouter(UserCreateTokenContainerV)