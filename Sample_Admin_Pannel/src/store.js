import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer'

const middlewares = [thunk];
const { logger } = require(`redux-logger`);
    middlewares.push(logger);

export default createStore(rootReducer,applyMiddleware(...middlewares))


/* 

import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store */