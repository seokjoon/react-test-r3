import React, { useCallback, useMemo, useState } from 'react'

const HookUseCallbackCom = () => {

  const [list, setList] = useState([])
  const [num, setNum] = useState('')

  const _getAvg = nums => {
    console.log('getAvg')
    if(nums.length === 0) return 0
    const sum = nums.reduce((a, b) => a + b)
    return sum / nums.length
  }

  const avg = useMemo(() => _getAvg(list), [list])

  const onChange = useCallback(e => {
    setNum(e.target._value)
  }, []) //컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(num))
    setList(nextList)
    setNum('')
  }, [num, list]) //num 혹은 list가 바뀌었을 때만 함수 생성

  return (
    <div>
      <input value={num} onChange={onChange} />
      <button onClick={onInsert}>insert</button>
      <div>{avg}</div>
    </div>
  )
}

export default HookUseCallbackCom