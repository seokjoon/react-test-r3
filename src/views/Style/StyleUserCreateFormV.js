import React from 'react'
import styled from 'styled-components'
import palette from './StyleUserCreatePalette'
import StyleUserCreateButton from './StyleUserCreateButton'

const StyleUserCreateFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        //margin-bottom: 1rem;
    }
`

// 스타일링된 input
const StyledInput = styled.div`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]}
        }
    }
`

const StyleUserCreateFormV = () => {
  return (
    <StyleUserCreateFormBlock>
      <h3>StyleUserCreateFormV</h3>
      <form>
        <StyledInput autoComplete="username" name="username" placeholder="아이디" />
        <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" />
        <StyleUserCreateButton cyan fullWidth style={{ marginTop: '1rem' }}>로그인</StyleUserCreateButton>
      </form>
      <Footer>
        foo
      </Footer>
</StyleUserCreateFormBlock>
  )
}

export default StyleUserCreateFormV