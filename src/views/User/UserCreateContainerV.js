import React, { useEffect } from 'react'
import UserCreateComV from './UserCreateComV'
import { useDispatch, useSelector } from 'react-redux'
import userRedux from '../../redux/ducks/userRedux'

const UserCreateContainerV = () => {

  const dispatch = useDispatch()

  const { form } = useSelector(({ userRedux }) => ({
    form: userRedux.create,
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
  }

  useEffect(() => {
    dispatch(userRedux.initForm('create'))
  }, [dispatch])

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