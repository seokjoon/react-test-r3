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
  ({ middlewareApiThunkRedux, r3ApiLoadingRedux }) => ({
    //loadingPost: middlewareApiThunkRedux.GET_POST,
    loadingPost: r3ApiLoadingRedux.loadingPost,
    //loadingUsers: middlewareApiThunkRedux.GET_USERS,
    loadingUsers: r3ApiLoadingRedux.loadingUsers,
    post: middlewareApiThunkRedux.post,
    users: middlewareApiThunkRedux.users,
  }),
  {
    getPost,
    getUsers,
  }
)(MiddlewareApiThunkContainerV)
