import { createContext, useState } from 'react'

const ContextDynamicCtx = createContext({
  state: { color: 'gray', colorSub: 'green', },
  actions: {
    setColor: () => {},
    setColorSub: () => {},
  },
})

const ContextDynamicProvider = ({ children }) => {
  const [color, setColor] = useState('gray')
  const [colorSub, setColorSub] = useState('green')

  const value = {
    state: { color, colorSub, },
    actions: { setColor, setColorSub, },
  }

  return (
    <ContextDynamicCtx.Provider value={value}>
      {children}
    </ContextDynamicCtx.Provider>
  )
}

const { Consumer: ContextDynamicConsumer } = ContextDynamicCtx

export { ContextDynamicProvider, ContextDynamicConsumer }

export default ContextDynamicCtx