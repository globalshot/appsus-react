import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { keepReducer } from './reducers/keep.reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    gStore: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  keepModule: keepReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.gStore = store;
