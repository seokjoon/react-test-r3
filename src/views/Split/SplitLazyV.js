import React, { useState, Suspense } from 'react'

const Foo = React.lazy(() => import('./SplitStateFooV'))

const SplitLazyV = () => {

  const [visible, setVisible] = useState(false)

  const onClick = () => {
    setVisible(true)
  }

  return (
    <div>
      <button onClick={onClick}>foo</button>

      <Suspense fallback={<div>loading...</div>}>
        {visible && <Foo />}
      </Suspense>

    </div>
  )
}

export default SplitLazyV