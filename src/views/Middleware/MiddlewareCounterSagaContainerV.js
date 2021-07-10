import React from 'react'
import { connect } from 'react-redux'
import { decreaseSaga, increaseSaga } from '../../redux/ducks/middlewareCounterSagaRedux'
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
    decreaseSaga,
    increaseSaga,
  }
)(MiddlewareCounterThunkContainerV)