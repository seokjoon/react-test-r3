import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import V from './views/V'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import rootReducer, { rootSaga } from './redux/ducks'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//import { createLogger } from 'redux-logger/src'
//import middlewareCounterMiddleware from './middleware/middlewareCounterMiddleware'
import ReduxThunk from 'redux-thunk'
import createMiddlewareSaga from 'redux-saga'
import userRedux from './redux/ducks/user/userRedux'


//const store = createStore(rootReducer)
const middlewareSaga = createMiddlewareSaga()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      //createLogger(),
      //middlewareCounterMiddleware,
      middlewareSaga,
      ReduxThunk,
    ),
  ),
)

function setUser() {
  try {
    const user = localStorage.getItem('user')
    if(!(user)) return 0
    store.dispatch(userRedux.createTokenTmp(user))
    store.dispatch(userRedux.check())
  } catch (e) {
    console.log('localStorage is not working')
  }
}

middlewareSaga.run(rootSaga)
setUser()


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode}>,
  <Provider store={store}>
    <BrowserRouter>
      <V />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
