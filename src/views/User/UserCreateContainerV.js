import React, { useEffect } from 'react'
import UserCreateComV from './UserCreateComV'
import { useDispatch, useSelector } from 'react-redux'
import userRedux from '../../redux/ducks/userRedux'

const UserCreateContainerV = () => {

  const dispatch = useDispatch()

  const { form, user, userError } = useSelector(({ userRedux }) => ({
    form: userRedux.create,
    user: userRedux.user,
    userError: userRedux.userError,
  }))

  const onChange = e => {
    const { name, value } = e.target
    dispatch(
      userRedux.changeField({
        form: 'create',
        key: name,
        val: value
      })
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    const { password, passwordConfirm, username, } = form
    if(password !== passwordConfirm) {
      console.log('password mismatch')
      return 0
    }
    dispatch(userRedux.create({ password, username, }))
  }

  useEffect(() => {
    dispatch(userRedux.initForm('create'))
  }, [dispatch])

  useEffect(() => {
    if(userError) {
      console.log('userError: ', userError)
      return 0
    }
    if(user) {
      console.log('user: ', user)
    }
  }, [user, userError])

  return (
    <UserCreateComV
      type="create"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default UserCreateContainerV