import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userCreateRedux from '../../redux/ducks/userCreateRedux'
import UserCreateComV from './UserCreateComV'

const UserCreateTokenContainerV = () => {

  const dispatch = useDispatch()

  const { form } = useSelector(({ userCreateRedux }) => ({
    form: userCreateRedux.createToken,
  }))

  const onChange = e => {
    const { name, value, } = e.target
    dispatch(
      userCreateRedux.changeField({
        form: 'createToken',
        key: name,
        val: value,
      })
    )
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(userCreateRedux.initForm('createToken'))
  }, [dispatch])

  return (
    <UserCreateComV
      type="createToken"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default UserCreateTokenContainerV