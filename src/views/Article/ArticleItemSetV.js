import React from 'react'
import ArticleEditorV from './ArticleEditorV'
import ArticleTagV from './ArticleTagV'
import StyleResponsive from '../Style/StyleResponsive'
import ArticleBtnV from './ArticleBtnV'

const ArticleItemSetV = () => {
  return (
    <StyleResponsive>
      <h3>ArticleItemSetV</h3>
      <div>
        <ArticleEditorV />
        <ArticleBtnV />
        <ArticleTagV />
      </div>
    </StyleResponsive>
  )
}

export default ArticleItemSetV