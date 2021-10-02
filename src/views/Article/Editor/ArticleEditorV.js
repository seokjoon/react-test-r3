import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StyleResponsive from '../../Style/StyleResponsive'
import palette from '../../Style/StyleUserCreatePalette'
// import Quill from 'quill/core/quill'
import Quill from 'quill'
import 'quill/dist/quill.bubble.css'


const EditorBlock = styled(StyleResponsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const QuilWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 100px;
    font-size: 1.125rem;
    line-height: 1.5;
    
    color: #222222;
    background: #d8d8d8;
  }

  .ql-editor.ql-blank::before {
    left: 0;
  }
`

const TitleInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
  
  background: #d8d8d8;
`

const ArticleEditorV = ({ content, onChangeField, title }) => {
  const quillElement = useRef(null)
  const quillInstance = useRef(null)

  const onChangeTitle = e => {
    onChangeField({ key: 'title', val: e.target.value })
  }

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요.',
      modules: { //https://quilljs.com/docs/modules/toolbar
        toolbar: [
          [{ header: '1', }, { header: '2', }],
          ['bold', 'italic', 'underline', 'strike',],
          [{ list: 'ordered' }, { list: 'bullet', },],
          ['blockquote', 'code-block', 'link', 'image',],
        ],
      },
    })

    //quill에 text-change 이벤트 핸들러 등록
    //https://quilljs.com/docs/quickstart/
    const quill = quillInstance.current
    quill.on('text-change', (delta, oldDelta, source) => {
      if(source === 'user') onChangeField({ key: 'content', val: quill.root.innerHTML })
    })
  }, [onChangeField])

  return (
    <EditorBlock>
      <TitleInput
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요."
        value={title}
      />
      <QuilWrapper>
        <div ref={quillElement}/>
      </QuilWrapper>
    </EditorBlock>
  )
}

export default ArticleEditorV