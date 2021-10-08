import React from 'react'
import styled from 'styled-components'
import StyleResponsive from '../../Style/StyleResponsive'


const Content = styled.div``

const Desc = styled.div``

const ItemBlock = styled(StyleResponsive)``

const Head = styled.div``

const Tags = styled.div``

const Title = styled.div``


const ArticleItemV = ({ article, error, loading }) => {

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
        <Desc>
          <div>{user && user.username}</div>
          <div>{ new Date(dateCreate).toLocaleDateString() }</div>
        </Desc>
        <Tags>{ tags.map((tag, idx) => (<div key={idx}># {tag}</div>)) }</Tags>
      </Head>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </ItemBlock>
  )
}

export default ArticleItemV