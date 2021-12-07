import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import getAllUsers from "./sagas";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const middlewares = [sagaMiddleware]; // Add all the middlewares

  const middlewareEnhancer = applyMiddleware(...middlewares); // Apply and enhance middlewares with dev-tools.

  const store = createStore(rootReducer, initialState, middlewareEnhancer); // Create Store for the App
  sagaMiddleware.run(getAllUsers); // Run all the sagas
  return store;
}

export default configureStore({});
