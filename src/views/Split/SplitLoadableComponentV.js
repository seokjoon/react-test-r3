import React, { useState } from 'react'
import loadable$2 from '@loadable/component'

const Foo = loadable$2(() => import('./SplitStateFooV'), {
  fallback: <div>loading...</div>
})

const SplitLoadableComponentV = () => {

  const [visible, setVisible] = useState(false)

  const onClick = () => {
    setVisible(true)
  }

  const onMouseOver = () => {
    Foo.preload()
  }

  return (
    <div>
      <h3>SplitLoadableComponent</h3>
      <div>
        <button onClick={onClick} onMouseOver={onMouseOver}>foo</button>
        { visible && <Foo /> }
      </div>
    </div>
  )
}

export default SplitLoadableComponentV