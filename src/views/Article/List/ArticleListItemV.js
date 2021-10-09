import React from 'react'
import styled from 'styled-components'
import ArticleDescV from '../ArticleDescV'
import ArticleTagsV from '../ArticleTagsV'


const ItemBlock = styled.div``

const ArticleListItemV = ({ article }) => {

  // const { content, dateCreate, id, tags, title, user, } = article

  return (
    <ItemBlock>
      <h2>제목</h2>
      <ArticleDescV dateCreate={new Date()} username="username" />
      <ArticleTagsV tags={['foo', 'bar',]} />
      <p>foo foo</p>
    </ItemBlock>
  )
}

export default ArticleListItemV