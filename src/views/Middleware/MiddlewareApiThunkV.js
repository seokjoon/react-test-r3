import React from 'react'

const MiddlewareApiThunkV = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <h3>MiddlewareApiThunk</h3>
      <section>
        <div>post</div>
        { loadingPost && 'loading...' }
        {(!(loadingPost) && post) && (
          <div>
            <div>{ post.title }</div>
            <div>{ post.body }</div>
          </div>
        )}
      </section>
      <hr />
      <section>
        <div>users</div>
        { loadingUsers && 'loading...' }
        {(!(loadingUsers) && users) && (
          <ul>
            {users.map(user => (
              <li key={user.id}> { user.username } ({ user.email }) </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default MiddlewareApiThunkV