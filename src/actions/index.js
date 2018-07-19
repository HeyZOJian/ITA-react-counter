export const increase = (index) => {
  console.log("****************************");
  console.log("action:increase");
  console.log("****************************");
  return {type: 'INCREMENT', index}
}
export const decrease = (index) => {
  return {type: 'DECREMENT', index}
}
export const multiply = (index,multiplier) => {
  return {multiplier: multiplier,index, type: 'MULTIPLE'}
}