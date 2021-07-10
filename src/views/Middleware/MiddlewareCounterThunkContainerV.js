import React from 'react'
import MiddlewareCounterThunkV from './MiddlewareCounterThunkV'
import { connect } from 'react-redux'
import { decreaseAsync, increaseAsync } from '../../redux/ducks/middlewareCounterThunkRedux'

const MiddlewareCounterThunkContainerV = ({ decreaseAsync, increaseAsync, num, }) => {
  return (
    <MiddlewareCounterThunkV onDecrease={decreaseAsync} onIncrease={increaseAsync} num={num} />
  )
}

export default connect(
  state => ({
    num: state.middlewareCounterThunkRedux,
  }),
  {
    decreaseAsync,
    increaseAsync,
  }
)(MiddlewareCounterThunkContainerV)