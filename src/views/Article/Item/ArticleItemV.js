import React from 'react'
import styled from 'styled-components'
import StyleResponsive from '../../Style/StyleResponsive'


const ArticleItemBlock = styled(StyleResponsive)``

const ArticleHead = styled.div``

const ArticleTitle = styled.div``

const ArticleTags = styled.div``

const ArticleContent = styled.div``


const ArticleItemV = ({ article, error, loading }) => {

  if(error) {
    return (
      <ArticleItemBlock>
        {(((error.response) && (error.response.status === 404)) ? '존재하지 않는 아티클' : '오류 발생')}
      </ArticleItemBlock>
    )
  }
  if((loading) || (!(article))) return null

  const { content, dateCreate, tags, title, user, } = article

  return (
    <ArticleItemBlock>
      <h3>ArticleItemV</h3>

      <ArticleHead>
        <ArticleTitle>{ title }</ArticleTitle>
        <div>{user && user.username}</div>
        <div>{ new Date(dateCreate).toLocaleDateString() }</div>
        <ArticleTags>{ tags.map((tag, idx) => (<div key={idx}># {tag}</div>)) }</ArticleTags>
      </ArticleHead>

      <ArticleContent dangerouslySetInnerHTML={{ __html: content }} />

    </ArticleItemBlock>
  )
}

export default ArticleItemV