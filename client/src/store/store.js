import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import roomReducer from "./reducers/roomReducer";
import subjectsReducer from "./reducers/subjectsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  room: roomReducer,
  subjects: subjectsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
