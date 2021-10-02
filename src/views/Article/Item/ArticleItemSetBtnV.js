import React from 'react'
import styled from 'styled-components'
import StyleUserCreateButton from '../../Style/StyleUserCreateButton'


const ArticleBtnBlock = styled.div``

const ButtonStyled = styled(StyleUserCreateButton)``


const ArticleItemSetBtnV = ({ onCancel, onCreate }) => {
  return (
    <ArticleBtnBlock>
      <ButtonStyled cyan onClick={onCreate}>
        ADD
      </ButtonStyled>
      <ButtonStyled onClick={onCancel}>
        CANCEL
      </ButtonStyled>
    </ArticleBtnBlock>
  )
}

export default ArticleItemSetBtnV