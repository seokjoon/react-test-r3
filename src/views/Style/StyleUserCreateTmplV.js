import React from 'react'
import styled from 'styled-components'
import palette from './StyleUserCreatePalette'

const StyleUserCreateTmplBlock = styled.div`
    // 화면 전체를 채움
    //position: absolute;
    //left: 0;
    //top: 0;
    //bottom: 0;
    //right: 0;
    background: ${palette.gray[2]};
    // flex로 내부 내용 중앙 정렬
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
`

const StyleUserCreateTmplV = ({ children }) => {
  return (
    <StyleUserCreateTmplBlock>
      <WhiteBox>
        <h3>StyleUserCreateTmplV</h3>
        <div className="logo-area">
          {children}
        </div>
      </WhiteBox>
    </StyleUserCreateTmplBlock>
  )
}

export default StyleUserCreateTmplV