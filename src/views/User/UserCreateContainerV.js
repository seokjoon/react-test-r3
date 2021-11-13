import React, { useEffect, useState } from 'react'
import UserCreateComV from './UserCreateComV'
import { useDispatch, useSelector } from 'react-redux'
import userCreateRedux from '../../redux/ducks/user/userCreateRedux'
import userRedux from '../../redux/ducks/user/userRedux'
// import { withRouter } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'

const UserCreateContainerV = ({ history }) => {

  const [err, setErr] = useState(null)

  const dispatch = useDispatch()

  const { form, userCreate, userCreateError, user } = useSelector(({ userCreateRedux, userRedux }) => ({
    form: userCreateRedux.create,
    userCreate: userCreateRedux.userCreate,
    userCreateError: userCreateRedux.userCreateError,
    user: userRedux.user,
  }))

  //입력 변경 이벤트 핸들러
  const onChange = e => {
    const { name, value } = e.target
    dispatch(userCreateRedux.changeField({ form: 'create', key: name, val: value }))
  }

  //폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault()
    const { password, passwordConfirm, username, } = form
    if([password, passwordConfirm, username,].includes('')) {
      setErr('not allowed empty value')
      return 0
    }
    if(password !== passwordConfirm) {
      setErr('password mismatch')
      dispatch(userCreateRedux.changeField({ form: 'create', key: 'password', val: '', }))
      dispatch(userCreateRedux.changeField({ form: 'create', key: 'passwordConfirm', val: '', }))
      return 0
    }
    dispatch(userCreateRedux.create({ password, username, }))
  }

  //컴포넌트 첫 렌더링시 form 초기화
  useEffect(() => {
    dispatch(userCreateRedux.initForm('create'))
  }, [dispatch])

  //회원가입 성공/실패
  useEffect(() => {
    if(userCreateError) {
      if(userCreateError.response.status === 409) {
        setErr('userCreateError: user exist ' + userCreateError)
        return 0
      }
      setErr('userCreateError: ' + userCreateError)
      return 0
    }
    if(userCreate) {
      console.log('user: ', userCreate)
      dispatch(userRedux.check())
    }
  }, [userCreate, userCreateError, dispatch])

  //user 값 설정 확인
  useEffect(() => {
    if(user) {
      console.log('user: ', user)
      history.push(r3Const.pathPublic + '/user')
      try {
        localStorage.setItem('user', JSON.stringify(user))
      } catch (e) {
        console.log('localStorage is not working')
      }
    }
  }, [history, user])

  return (
    <UserCreateComV
      err={err}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      type="create"
    />
  )
}

export default UserCreateContainerV