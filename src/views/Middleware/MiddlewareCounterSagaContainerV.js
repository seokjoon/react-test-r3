import React from 'react'
import { connect } from 'react-redux'
import middlewareCounterSagaRedux from '../../redux/ducks/middleware/middlewareCounterSagaRedux'
import MiddlewareCounterSagaV from './MiddlewareCounterSagaV'

const MiddlewareCounterThunkContainerV = ({ decreaseSaga, increaseSaga, num, }) => {
  return (
    <MiddlewareCounterSagaV onDecrease={decreaseSaga} onIncrease={increaseSaga} num={num} />
  )
}

export default connect(
  state => ({
    num: state.middlewareCounterSagaRedux,
  }),
  {
    decreaseSaga: middlewareCounterSagaRedux.decreaseSaga,
    increaseSaga: middlewareCounterSagaRedux.increaseSaga,
  }
)(MiddlewareCounterThunkContainerV)