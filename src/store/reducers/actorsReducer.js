import ACTIONS_TYPES from '../actions/actionsTypes'
const initialState = {
  actors: [],
  error: null,
  isFetching: false
}

export default function actorsReducer(state = initialState, {type, payload}){

  switch(type){
    case ACTIONS_TYPES.GET_ACTOR_SUCCESS:
    case ACTIONS_TYPES.GET_ACTORS_SUCCESS: return {...state, actors: [...payload], isFetching: false};
    case ACTIONS_TYPES.POST_ACTOR_SUCCESS: return {...state, 
                                          actors: [...state.actors, payload],
                                          isFetching: false};
    case ACTIONS_TYPES.PUT_ACTOR_SUCCESS: return {...state,
                                          actors: state.actors.map((movie) => movie.id !== payload.id 
                                                                    ? movie : payload),
                                          isFetching: false};
    case ACTIONS_TYPES.DELETE_ACTOR_SUCCESS: return {...state, 
                                            actors: state.actors.filter((movie) => movie.id !== payload),
                                            isFetching: false}
    case ACTIONS_TYPES.GET_ACTOR_REQUEST:
    case ACTIONS_TYPES.POST_ACTOR_REQUEST:
    case ACTIONS_TYPES.PUT_ACTOR_REQUEST:
    case ACTIONS_TYPES.DELETE_ACTOR_REQUEST:
    case ACTIONS_TYPES.GET_ACTORS_REQUEST: return {...state, isFetching: true};
    case ACTIONS_TYPES.GET_ACTOR_ERROR:
    case ACTIONS_TYPES.POST_ACTOR_ERROR:
    case ACTIONS_TYPES.PUT_ACTOR_ERROR:
    case ACTIONS_TYPES.DELETE_ACTOR_ERROR:
    case ACTIONS_TYPES.GET_ACTORS_ERROR: return {...state, isFetching: false, error: payload};
    default: return state;
  }
}

