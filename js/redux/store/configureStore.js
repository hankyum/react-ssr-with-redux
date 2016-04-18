import { createStore, applyMiddleware, bindActionCreators, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {counterReducer, testReducer} from "../reducers/counter-reducers";

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const rootReducer = combineReducers({
  counter: counterReducer,
  test: testReducer
});

export default (initialState = {}) =>
  createStoreWithMiddleware(rootReducer, initialState);