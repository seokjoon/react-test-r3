import React from 'react'
import styled from 'styled-components'
import StyleResponsive from './StyleResponsive'
import { Link } from 'react-router-dom'
import StyleUserCreateButton from './StyleUserCreateButton'

const HeadBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`

const Wrapper = styled(StyleResponsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  // justify-content: space-between; //자식 엘리먼트 사이의 여백을 최대로
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`

const Spacer = styled.div` //헤더가 fixed 이므로 페이지 콘텐츠를 4rem 아래로
  height: 4rem;
`

const StyleResponsiveHead = () => (
  <>
    <HeadBlock>
      <h3> StyleResponsiveHead </h3>
      <Wrapper>
        <Link to="foo" className="logo">style</Link>
        <div className="right">
          <StyleUserCreateButton to="foo">userCreateToken</StyleUserCreateButton>
        </div>
      </Wrapper>
    </HeadBlock>
    <Spacer/>
  </>
)

export default StyleResponsiveHead