import React from 'react'
import StyleResponsive from '../../../Style/StyleResponsive'
import ArticleEditorContainerV from '../../Editor/ArticleEditorContainerV'
import ArticleItemSetTagContainerV from './ArticleItemSetTagContainerV'
import ArticleBtnContainerV from './ArticleItemSetBtnContainerV'

const ArticleItemSetV = () => {
  return (
    <StyleResponsive>
      <h3>ArticleItemSetV</h3>
      <div>
        <ArticleEditorContainerV />
        <ArticleBtnContainerV />
        <ArticleItemSetTagContainerV />
      </div>
    </StyleResponsive>
  )
}

export default ArticleItemSetV