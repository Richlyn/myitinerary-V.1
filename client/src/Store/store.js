import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Store/Reducers/rootReducer";
import thunk from "redux-thunk";

const initialState = {
  cities: [],
  itineraries: []
};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
