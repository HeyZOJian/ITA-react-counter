import * as types from '../constants/ActionTypes'


export default (state = [0, 0], action) => {
    console.log("-------------------------------------");
    console.log("| reducer-index: " + action.index);
    console.log("-------------------------------------");

    console.log("-------------------------------------");
    console.log("| reducer-type: " + action.type);
    console.log("-------------------------------------");
    switch (action.type) {
        case types.INCREMENT: {
            const newState = [...state]
            newState[action.index]++
            return newState
        }
        case types.DECREMENT: {
            const newState = [...state]
            newState[action.index]--
            return newState
        }
        case types.MULTIPLE: {
            console.log("-------------------------------------");
            console.log("| multiplier: " + action.multiplier);
            console.log("-------------------------------------");
            const newState = [...state]
            newState[action.index] *= action.multiplier;
            return newState
        }
        default:
            return state
    }
}
