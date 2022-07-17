import ACTIONS_TYPES from '../actions/actionsTypes'
const initialState = {
  movies: [],
  error: null,
  isFetching: false
}

export default function moviesReducer(state = initialState, {type, payload}){
  
  switch(type){
    // Get all
    case ACTIONS_TYPES.GET_MOVIES_SUCCESS: return {...state, movies: payload, isFetching: false};
    case ACTIONS_TYPES.GET_MOVIES_REQUEST: return {...state, isFetching: true};
    case ACTIONS_TYPES.GET_MOVIES_ERROR: return {...state, isFetching: false, error: payload};
    default: return state;
  }
}