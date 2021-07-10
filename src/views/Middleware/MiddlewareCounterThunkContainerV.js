import React from 'react'
import MiddlewareCounterThunkV from './MiddlewareCounterThunkV'
import { connect } from 'react-redux'
import { decreaseThunk, increaseThunk } from '../../redux/ducks/middlewareCounterThunkRedux'

const MiddlewareCounterThunkContainerV = ({ decreaseThunk, increaseThunk, num, }) => {
  return (
    <MiddlewareCounterThunkV onDecrease={decreaseThunk} onIncrease={increaseThunk} num={num} />
  )
}

export default connect(
  state => ({
    num: state.middlewareCounterThunkRedux,
  }),
  {
    decreaseThunk,
    increaseThunk,
  }
)(MiddlewareCounterThunkContainerV)