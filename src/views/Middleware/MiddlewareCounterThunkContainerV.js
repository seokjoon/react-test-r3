import React from 'react'
import MiddlewareCounterThunkV from './MiddlewareCounterThunkV'
import { connect } from 'react-redux'
import middlewareCounterThunkRedux from '../../redux/ducks/middleware/middlewareCounterThunkRedux'


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
    decreaseThunk: middlewareCounterThunkRedux.decreaseThunk,
    increaseThunk: middlewareCounterThunkRedux.increaseThunk,
  }
)(MiddlewareCounterThunkContainerV)