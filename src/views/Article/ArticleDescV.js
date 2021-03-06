import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Desc = styled.div``

const ArticleDescV = ({ dateCreate, username }) => {
  return (
    <Desc>
      <span>
        <b>
          <Link to={`/article/user/${username}`}>{ username }</Link>
        </b>
      </span>&nbsp;
      <span>{ new Date(dateCreate).toLocaleDateString() }</span>
    </Desc>
  )
}

export default ArticleDescV