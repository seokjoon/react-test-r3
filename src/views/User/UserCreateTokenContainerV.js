import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userRedux from '../../redux/ducks/userRedux'
import UserCreateTokenComV from './UserCreateTokenComV'

const UserCreateTokenContainerV = () => {

  const dispatch = useDispatch()

  const { form } = useSelector(({ userRedux }) => ({
    form: userRedux.createToken,
  }))

  const onChange = e => {
    const { name, value, } = e.target
    dispatch(
      userRedux.changeField({
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
    dispatch(userRedux.initForm('createToken'))
  }, [dispatch])

  return (
    <UserCreateTokenComV
      type="createToken"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default UserCreateTokenContainerV