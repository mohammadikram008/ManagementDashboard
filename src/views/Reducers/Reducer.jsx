import { FETCH_AGENTS_SUCCESS, FETCH_AGENTS_FAILURE } from '../Actions/Action';

const initialState = {
  agents: [],
  error: null,
};

const agentReducer = (state = initialState, action) => { 

  switch (action.type) {
    case FETCH_AGENTS_SUCCESS:
      return {
        ...state,
        agents: action.payload,
        error: null,
      };
      
    case FETCH_AGENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default agentReducer;
