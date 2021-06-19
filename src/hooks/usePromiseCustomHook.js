import { useEffect, useState } from 'react'

function usePromiseCustomHook(promiseCreator, deps) {

  //실패, 대기, 완료 상태 관리
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)
  const [resolved, setResolved] = useState(null)

  useEffect(() => {
    const process = async () => {
      setLoading(true)
      try {
        const resolved = await promiseCreator()
        setResolved(resolved)
      } catch (e) {
        setErr(e)
      }
      setLoading(false)
    }
    process()
  }, deps)
  return [err, loading, resolved]
}

export default usePromiseCustomHook