import React from 'react'
import MiddlewareCounterSagaV from './MiddlewareCounterSagaV'
import { connect } from 'react-redux'
// import { decreaseSaga, increaseSaga } from '../../redux/ducks/middlewareCounterSagaRedux'

const MiddlewareCounterSagaContainerV = ({ decreaseSaga, increaseSaga, num, }) => {
  return (
    <MiddlewareCounterSagaV onDecrease={decreaseSaga} onIncrease={increaseSaga} num={num} />
  )
}

export default connect(
  state => ({
    num: state.middlewareCounterSagaRedux,
  }),
  {
    // decreaseSaga,
    // increaseSaga,
  }
)(MiddlewareCounterSagaContainerV)