import React from 'react'
import styled from 'styled-components'
import StyleResponsive from '../../Style/StyleResponsive'
import ArticleDescV from '../ArticleDescV'
import ArticleTagsV from '../ArticleTagsV'


const Content = styled.div``

const ItemBlock = styled(StyleResponsive)``

const Head = styled.div``

const Title = styled.div``


const ArticleItemV = ({ article, error, loading, actionButtons }) => {

  if(error) {
    return (
      <ItemBlock>
        {(((error.response) && (error.response.status === 404)) ? '존재하지 않는 아티클' : '오류 발생')}
      </ItemBlock>
    )
  }
  if((loading) || (!(article))) return null

  const { content, dateCreate, tags, title, user, } = article

  return (
    <ItemBlock>
      <h3>ArticleItemV</h3>
      <Head>
        <Title>{ title }</Title>
        <ArticleDescV dateCreate={dateCreate} username={user && user.username} />
        <ArticleTagsV tags={tags} />
      </Head>
      { actionButtons }
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </ItemBlock>
  )
}

export default ArticleItemV