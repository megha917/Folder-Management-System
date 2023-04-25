import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import foldersReducer from "./reducer/foldersReducer";

const rootreducer = combineReducers({
  auth: authReducer,
  folders: foldersReducer,
});

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
