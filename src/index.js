import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import V from './views/V'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//const store = createStore(rootReducer)
const store = createStore(
  rootReducer,
  composeWithDevTools()
)

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
