import React from 'react'
import usePromiseCustomHook from '../../hooks/usePromiseCustomHook'
import axios from 'axios'

const AsyncHookPromiseV = () => {
  const [err, loading, res] = usePromiseCustomHook(() => {
    return axios.get('/')
  }, [])

  if(loading) return 'loading'
  if(!(res)) return null
  if(err) return 'err'

  return (
    <div>
      <h3>AsyncHookPromiseV</h3>
      <div>
        <div>{ JSON.stringify(res.data) }</div>
      </div>
    </div>
  )
}

export default AsyncHookPromiseV