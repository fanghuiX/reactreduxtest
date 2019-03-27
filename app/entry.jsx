import 'utils/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Router from 'routes'
import reducer from './modules/home/reducers'
import finalCreateStore from './store/index'

const store = finalCreateStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById('app')
)
