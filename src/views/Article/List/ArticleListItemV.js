import React from 'react'
import styled from 'styled-components'
import ArticleDescV from '../ArticleDescV'
import ArticleTagsV from '../ArticleTagsV'
import { Link } from 'react-router-dom'


const ItemBlock = styled.div``

const ArticleListItemV = ({ article }) => {

  const { content, dateCreate, _id, tags, title, user, } = article

  return (
    <ItemBlock>
      <h2> <Link to={`/article/${_id}`}>{ title }</Link> </h2>
      <ArticleDescV dateCreate={ dateCreate } username={ user.username } />
      <ArticleTagsV tags={ tags } />
      <p>{ content }</p>
    </ItemBlock>
  )
}

export default ArticleListItemV