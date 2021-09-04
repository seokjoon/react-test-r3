import React from 'react'
import StyleResponsive from '../Style/StyleResponsive'
import ArticleBtnV from './ArticleBtnV'
import ArticleEditorContainerV from './ArticleEditorContainerV'
import ArticleTagContainerV from './ArticleTagContainerV'

const ArticleItemSetV = () => {
  return (
    <StyleResponsive>
      <h3>ArticleItemSetV</h3>
      <div>
        <ArticleEditorContainerV />
        <ArticleBtnV />
        <ArticleTagContainerV />
      </div>
    </StyleResponsive>
  )
}

export default ArticleItemSetV