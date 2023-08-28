import { combineReducers } from "redux";
import ProdReducer from "./ProdReducer";

const rootreducer = combineReducers({
    product : ProdReducer
})

export default rootreducer;