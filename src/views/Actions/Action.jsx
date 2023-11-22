export const FETCH_AGENTS_SUCCESS = 'FETCH_AGENTS_SUCCESS';
export const FETCH_AGENTS_FAILURE = 'FETCH_AGENTS_FAILURE';
import axios from 'axios';

export const fetchAgents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3005/api/tasks/getagentprofiledetail');
      dispatch(fetchAgentsSuccess(response.data));
    } catch (error) {
      dispatch(fetchAgentsFailure(error));
      console.error('Error fetching agents:', error);
      // You might consider showing an error message using toast here
    }
  };
};
export const fetchAgentsSuccess = (agents) => ({
  type: FETCH_AGENTS_SUCCESS,
  payload: agents,
});

export const fetchAgentsFailure = (error) => ({
  type: FETCH_AGENTS_FAILURE,
  payload: error,
});

