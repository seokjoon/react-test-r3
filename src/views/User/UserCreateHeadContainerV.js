import { useDispatch, useSelector } from 'react-redux'
import StyleUserCreateButton from '../Style/StyleUserCreateButton'
import r3Const from '../../helpers/r3Const'
import userRedux from '../../redux/ducks/user/userRedux'

const UserCreateHeadContainerV = () => {

  const { user } = useSelector(({ userRedux }) => ({
    user: userRedux.user,
  }))

  const dispatch = useDispatch()
  const destroyToken = () => {
    dispatch(userRedux.destroyToken())
  }

  const outUser = (
    <div>
      <div>{ user && user.name }</div>
      <StyleUserCreateButton onClick={destroyToken}>userDestroyToken</StyleUserCreateButton>
    </div>
  )

  const outUserNull = (
    <div>
      <StyleUserCreateButton to={r3Const.pathPublic + '/user/createToken'}>userCreateToken</StyleUserCreateButton>
    </div>
  )

  return (
    <div>
      { user ? outUser : outUserNull }
    </div>
  )
}

export default UserCreateHeadContainerV