import React from 'react'
import MiddlewareCounterV from './MiddlewareCounterV'
import { connect } from 'react-redux'
import { decrease, increase } from '../../redux/ducks/middlewareCounterRedux'

const MiddlewareCounterContainerV = ({ decrease, increase, num, }) => {
  return (
    <MiddlewareCounterV onDecrease={decrease} onIncrease={increase} num={num} />
  )
}

export default connect(
  state => ({
    num: state.middlewareCounterRedux
  }),
  {
    decrease,
    increase,
  }
)(MiddlewareCounterContainerV)