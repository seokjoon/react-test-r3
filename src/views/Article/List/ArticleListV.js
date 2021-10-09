import React from 'react'
import styled from 'styled-components'
import ArticleListItemV from './ArticleListItemV'
import ArticleItemSetBtnContainerV from '../Item/Set/ArticleItemSetBtnContainerV'


const ItemsBlock = styled.div``

const SetButtonWrapper = styled.div``


const ArticleListV = ({ articles, error, isAvailBtn, loading, }) => {

  if(error) return <ItemsBlock>에러 발생</ItemsBlock>

  return (
    <ItemsBlock>
      <h3>ArticleListV</h3>

      <SetButtonWrapper>
        { isAvailBtn && <ArticleItemSetBtnContainerV to="/TODO">ADD</ArticleItemSetBtnContainerV> }
      </SetButtonWrapper>

      { ((!(loading)) && (articles)) && (
        <div>
          { articles.map(article => <ArticleListItemV article={article} key={article._id} />) }
        </div>
      )}
    </ItemsBlock>
  )
}

export default ArticleListV