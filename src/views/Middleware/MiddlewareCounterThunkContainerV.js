import React from 'react'
import MiddlewareCounterThunkV from './MiddlewareCounterThunkV'
import { connect } from 'react-redux'
import { decrease, increase } from '../../redux/ducks/middlewareCounterThunkRedux'

const MiddlewareCounterThunkContainerV = ({ decrease, increase, num, }) => {
  return (
    <MiddlewareCounterThunkV onDecrease={decrease} onIncrease={increase} num={num} />
  )
}

export default connect(
  state => ({
    num: state.middlewareCounterThunkRedux,
  }),
  {
    decrease,
    increase,
  }
)(MiddlewareCounterThunkContainerV)