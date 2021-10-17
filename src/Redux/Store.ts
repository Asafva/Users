
import { composeWithDevTools } from 'redux-devtools-extension';






import { combineReducers, createStore } from "redux";
import { usersReducer } from "./UsersState";

const reducers = combineReducers({ usersState: usersReducer, });
;

const store = createStore(reducers, composeWithDevTools());

export default store;



