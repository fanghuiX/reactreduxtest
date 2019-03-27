import { GETDATA, CLEARDATA } from '../constants'

const initialState = {
  lists: [
    {text: 'this is textone'},
    {text: 'wasd'},
    {text: 'GAME OVER'},
    {text: '龙卷风摧毁停车场，乌鸦'}
  ]
}

export default function getd(state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return Object.assign({}, state, {lists: initialState.lists})
    case CLEARDATA:
      return Object.assign({}, state, {lists: []})
    default:
      return state
  }
}
