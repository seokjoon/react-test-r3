import React, { useEffect, useState } from 'react'

const HookUseEffectCom = () => {

  const [foo, setFoo] = useState('')

  useEffect(() => { console.log(foo) }) //didMount + didUpdate

  useEffect(() => { console.log(foo.toUpperCase()) }, [ foo ]) //배열 내 state가 변경될 때만
  useEffect(() => { console.log('FOO') }, []) //didMount

  useEffect(() => { console.log('bar'); return () => { console.log('BAR') } }) //뒷정리: unmount + before update
  useEffect(() => { console.log('bee'); return () => { console.log('BEE') } }, []) //뒷정리: unmount

  return (
    <div>
      <button onClick={() => setFoo(foo + ' foo')}>setFoo</button>
      { foo }
    </div>
  )
}

export default HookUseEffectCom