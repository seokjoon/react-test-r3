import React from 'react'

import styled from 'styled-components'
import ArticleListItemV from './ArticleListItemV'

const SetButtonWrapper = styled.div``

const ItemsBlock = styled.div``

const ArticleListV = () => {
  return (
    <ItemsBlock>
      <SetButtonWrapper>
        ADD
      </SetButtonWrapper>
      <div>
        <ArticleListItemV />
        <ArticleListItemV />
        <ArticleListItemV />
      </div>
    </ItemsBlock>
  )
}

export default ArticleListV