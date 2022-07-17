const initialState = {
  directors: [],
  error: null,
  isFetching: false
}

export default function directorsReducer(state = initialState, {type, payload}){
  switch(type){
    default: return state;
  }
}