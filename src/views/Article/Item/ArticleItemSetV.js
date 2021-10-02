import React from 'react'
import StyleResponsive from '../../Style/StyleResponsive'
import ArticleEditorContainerV from '../Editor/ArticleEditorContainerV'
import ArticleTagContainerV from '../ArticleTagContainerV'
import ArticleBtnContainerV from './ArticleItemSetBtnContainerV'

const ArticleItemSetV = () => {
  return (
    <StyleResponsive>
      <h3>ArticleItemSetV</h3>
      <div>
        <ArticleEditorContainerV />
        <ArticleBtnContainerV />
        <ArticleTagContainerV />
      </div>
    </StyleResponsive>
  )
}

export default ArticleItemSetV