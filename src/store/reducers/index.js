import {combineReducers} from 'redux';

import moviesReducer from './moviesReducer';
import actorsReducer from './actorsReducer';
import studiosReducer from './studiosReducer';
import directorsReducer from './directorsReducer';


export default  combineReducers({
  moviesList: moviesReducer,
  actorsList: actorsReducer,
  directorsList: directorsReducer,
  studiosList: studiosReducer,
})