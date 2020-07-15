import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/postReducer";
import {todoReducer} from "./reducers/todoReducer";

const rootReducer = combineReducers({
  post: postReducer,
  todo: todoReducer
});

export const store = createStore(rootReducer);
