import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import generateActions from "./actions";
import reducer from "./reducers";

const store = createStore(combineReducers({
    reducer: reducer
}), applyMiddleware(thunk));

const actions = generateActions(store)

export { store, actions }