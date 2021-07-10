import React, { useEffect } from 'react'
import { getPost, getUsers } from '../../redux/ducks/middlewareApiThunkRedux'
import { connect } from 'react-redux'
import MiddlewareApiThunkV from './MiddlewareApiThunkV'

const MiddlewareApiThunkContainerV = ({
  getPost,
  getUsers,
  loadingPost,
  loadingUsers,
  post,
  users,
}) => {
  useEffect(() => {
    getPost(1)
    getUsers(1)
  }, [getPost, getUsers])

  return (
    <MiddlewareApiThunkV
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  )
}

export default connect(
  ({ middlewareApiThunkRedux }) => ({
    loadingPost: middlewareApiThunkRedux.GET_POST,
    post: middlewareApiThunkRedux.post,
    users: middlewareApiThunkRedux.users,
  }),
  {
    getPost,
    getUsers,
  }
)(MiddlewareApiThunkContainerV)
