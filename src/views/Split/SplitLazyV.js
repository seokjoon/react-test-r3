import React, { useState, Suspense } from 'react'

const Foo = React.lazy(() => import('./SplitStateFooV'))

const SplitLazyV = () => {

  const [visible, setVisible] = useState(false)

  const onClick = () => {
    setVisible(true)
  }

  return (
    <div>
      <h3>SplitLazyV</h3>
      <div>
        <button onClick={onClick}>foo</button>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <Foo />}
        </Suspense>
      </div>
    </div>
  )
}

export default SplitLazyV