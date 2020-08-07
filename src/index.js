import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import todoApp from './reducer'
import todoApp from './reducers/index'

const store = createStore(todoApp)

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)