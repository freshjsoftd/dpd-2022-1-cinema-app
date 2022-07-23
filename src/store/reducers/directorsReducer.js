import ACTIONS_TYPES from "../actions/actionsTypes";
const initialState = {
  directors: [],
  error: null,
  isFetching: false
}

export default function directorsReducer(state = initialState, {type, payload}){
  switch(type){
    case ACTIONS_TYPES.GET_DIRECTORS_SUCCESS: return {...state, 
      isFetching: false, 
      directors: [...payload]};
    case ACTIONS_TYPES.POST_DIRECTOR_SUCCESS: return {...state,
      isFetching: false,
      directors: [...state.directors, payload]};
    case ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS: return {...state,
      isFetching: false,
      directors: state.directors.map((director) => director.id === payload.id ? payload : director)};
    case ACTIONS_TYPES.DELETE_DIRECTOR_SUCCESS: return {...state,
      isFetching: false,
      directors: state.directors.filter((director) => director.id !== payload)};
    case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
    case ACTIONS_TYPES.POST_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.PUT_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.DELETE_DIRECTOR_REQUEST: return {...state, isFetching: true};
    case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
    case ACTIONS_TYPES.POST_DIRECTOR_ERROR:
    case ACTIONS_TYPES.PUT_DIRECTOR_ERROR:
    case ACTIONS_TYPES.DELETE_DIRECTOR_ERROR: return {...state, isFetching: false, error: payload}
    default: return state;
  }
}