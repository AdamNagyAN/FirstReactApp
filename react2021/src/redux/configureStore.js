import { combineReducers, createStore } from "redux";
import counter from "./ducks/counter";
import counterReducer from './ducks/counter'

const reducer = combineReducers({
    counter: counterReducer
})
const store = createStore(reducer);

export default store;