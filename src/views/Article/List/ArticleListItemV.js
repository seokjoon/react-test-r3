import React from 'react'
import styled from 'styled-components'
import ArticleListItemDescV from './ArticleListItemDescV'
import ArticleListItemTagsV from './ArticleListItemTagsV'

const ItemBlock = styled.div``

const ArticleListItemV = () => {
  return (
    <ItemBlock>
      <h2>제목</h2>
      <ArticleListItemDescV dateCreate={new Date()} username="username" />
      <ArticleListItemTagsV tags={['foo', 'bar',]} />
      <p>foo foo</p>
    </ItemBlock>
  )
}

export default ArticleListItemV