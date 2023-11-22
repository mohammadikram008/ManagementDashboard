import { createStore,applyMiddleware,compose,combineReducers   } from 'redux'
import thunk from 'redux-thunk';
import agentReducer from '../src/views/Reducers/Reducer';
const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  changeState,
  agent: agentReducer, // Assuming agentReducer handles specific agent-related state
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer ,
  composeEnhancers(applyMiddleware(thunk))
);


// const store = createStore(changeState,agentReducer, applyMiddleware(thunk))
export default store
