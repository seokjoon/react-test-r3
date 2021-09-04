import React from 'react'
import ArticleTagV from './ArticleTagV'
import StyleResponsive from '../Style/StyleResponsive'
import ArticleBtnV from './ArticleBtnV'
import ArticleEditorContainerV from './ArticleEditorContainerV'

const ArticleItemSetV = () => {
  return (
    <StyleResponsive>
      <h3>ArticleItemSetV</h3>
      <div>
        <ArticleEditorContainerV />
        <ArticleBtnV />
        <ArticleTagV />
      </div>
    </StyleResponsive>
  )
}

export default ArticleItemSetV