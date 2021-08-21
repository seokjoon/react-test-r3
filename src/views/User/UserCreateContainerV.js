import React, { useEffect } from 'react'
import UserCreateComV from './UserCreateComV'
import { useDispatch, useSelector } from 'react-redux'
import userCreateRedux from '../../redux/ducks/userCreateRedux'

const UserCreateContainerV = () => {

  const dispatch = useDispatch()

  const { form, userCreate, userCreateError } = useSelector(({ userCreateRedux }) => ({
    form: userCreateRedux.create,
    userCreate: userCreateRedux.userCreate,
    userCreateError: userCreateRedux.userCreateError,
  }))

  const onChange = e => {
    const { name, value } = e.target
    dispatch(
      userCreateRedux.changeField({
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
    dispatch(userCreateRedux.create({ password, username, }))
  }

  useEffect(() => {
    dispatch(userCreateRedux.initForm('create'))
  }, [dispatch])

  useEffect(() => {
    if(userCreateError) {
      console.log('userCreateError: ', userCreateError)
      return 0
    }
    if(userCreate) {
      console.log('user: ', userCreate)
    }
  }, [userCreate, userCreateError])

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