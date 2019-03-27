import { GETDATA, CLEARDATA } from '../constants'

export const getdata = () => {
  return {
    type: GETDATA
  }
}

export const cleardata = () => {
  return {
    type: CLEARDATA
  }
}
