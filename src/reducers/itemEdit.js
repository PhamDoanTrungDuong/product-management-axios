import * as types from "./../constants/ActionTypes"

var initState = {};
const product = (state = initState, action) => {
    
    switch(action.type){
        case types.EDIT_PRODUCT:
             return action.product;
       

        default: return state;
    }
}

export default product