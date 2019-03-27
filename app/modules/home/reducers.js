import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import update from './components/indecrase/reducers/count' // 引入update这个reducer
import getd from './components/getlist/reducers/getlists'

export default combineReducers({
  getd,
  update,
  routing: routerReducer
})
