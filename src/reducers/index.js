import { combineReducers } from "redux";
import products from "./products"
import itemEdit from "./itemEdit"

const myReducer = combineReducers({
    products,
    itemEdit
});

export default myReducer;