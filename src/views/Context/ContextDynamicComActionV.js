import React from 'react'
import { ContextDynamicConsumer } from '../../contexts/ContextDynamicCtx'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const ContextDynamicComActionV = () => {
  return (
    <div>
      <h4>select color</h4>
      <ContextDynamicConsumer>
        {({actions}) => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  cursor: 'pointer',
                  height: '24px',
                  width: '24px',
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault()
                  actions.setColorSub(color)
                }}
              />
            ))}
          </div>
        )}
      </ContextDynamicConsumer>
      <hr/>
    </div>
  )
}

export default ContextDynamicComActionV