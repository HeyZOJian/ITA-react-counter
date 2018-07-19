import * as types from '../constants/ActionTypes'

export const increase = (index) => {
  console.log("****************************");
  console.log("action:increase");
  console.log("****************************");
  return {type: types.INCREMENT, index}
}
export const decrease = (index) => {
  return {type: types.DECREMENT, index}
}
export const multiply = (index,multiplier) => {
  return {multiplier: multiplier,index, type: types.MULTIPLE}
}

export const increaseAsync = (index)=>{
    return {type: types.INCREMENTASYNC, index}
}