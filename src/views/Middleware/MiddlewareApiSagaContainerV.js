import React, { useEffect } from 'react'
import { getPost, getUsers } from '../../redux/ducks/middlewareApiSagaRedux'
import { connect } from 'react-redux'
import MiddlewareApiSagaV from './MiddlewareApiSagaV'

const MiddlewareApiSagaContainerV = ({
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
    <MiddlewareApiSagaV
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  )
}

export default connect(
  ({ middlewareApiSagaRedux, r3ApiLoadingRedux }) => ({
    //loadingPost: middlewareApiSagaRedux.GET_POST,
    loadingPost: r3ApiLoadingRedux.loadingPost,
    //loadingUsers: middlewareApiSagaRedux.GET_USERS,
    loadingUsers: r3ApiLoadingRedux.loadingUsers,
    post: middlewareApiSagaRedux.post,
    users: middlewareApiSagaRedux.users,
  }),
  {
    getPost,
    getUsers,
  }
)(MiddlewareApiSagaContainerV)
