import React, { useEffect, useState } from 'react'

const HookUseEffectV = () => {

  const [foo, setFoo] = useState('')

  useEffect(() => {
    console.log('didMount + didUpdate')
  }) //didMount + didUpdate

  useEffect(() => {
    console.log(foo.toUpperCase())
  }, [foo]) //배열 내 state가 변경될 때만

  useEffect(() => {
    console.log('didMount')
  }, []) //didMount

  useEffect(() => {
    console.log('unmount + before update')
    return () => { console.log('BEFORE unmount + before update') }
  }) //unmount + before update

  useEffect(() => {
    console.log('unmount')
    return () => { console.log('BEFORE unmount') }
  }, []) //unmount

  return (
    <div>
      <h3>HookUseEffectV</h3>
      <button onClick={() => setFoo(foo + ' foo')}>setFoo</button>
      {foo}
    </div>
  )
}

export default HookUseEffectV
