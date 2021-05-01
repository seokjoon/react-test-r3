import React, { useEffect, useState } from 'react'

const HookUseEffectContCom = () => {

  const [foo, setFoo] = useState('')

  useEffect(() => { console.log(foo) }) //didMount + didUpdate
  useEffect(() => { console.log(foo.toUpperCase()) }, [ foo ]) //배열 내 state가 변경될 때만
  useEffect(() => { console.log('FOO') }, []) //didMount

  return (
    <div>
      <button onClick={() => setFoo(foo + ' foo')}>setFoo</button>
      { foo }
    </div>
  )
}

export default HookUseEffectContCom