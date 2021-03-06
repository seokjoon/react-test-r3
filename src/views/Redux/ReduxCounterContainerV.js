import React from 'react'
import ReduxCounterComV from './ReduxCounterComV'
import { connect } from 'react-redux'
import reduxCounterRedux from '../../redux/ducks/redux/reduxCounterRedux'
// import { bindActionCreators } from 'redux'


// const mapDispatchToProps = dispatch => ({
//   decrease: () => dispatch(decrease()),
//   increase: () => dispatch(increase()),
// })
// const mapDispatchToProps = dispatch => bindActionCreators({
//   decrease,
//   increase,
// }, dispatch)
// const mapDispatchToProps = {
//   decrease,
//   increase,
// }
//
// const mapStateToProps = state => ({
//   num: state.reduxCounterRedux.num,
// })

const ReduxCounterContainerV = ({ num, decrease, increase }) => {
  return (
    <ReduxCounterComV num={num} onDecrease={decrease} onIncrease={increase} />
  )
}


//export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterContainerV)
export default connect(
  state => ({
    num: state.reduxCounterRedux.num,
  }),
  {
    decrease: reduxCounterRedux.decrease,
    increase: reduxCounterRedux.increase,
  },
)(ReduxCounterContainerV)