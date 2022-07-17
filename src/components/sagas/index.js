import { takeLatest } from 'redux-saga';

import ACTIONS_TYPES from '../../store/actions/actionsTypes';
import { getAllMoviesSaga } from './moviesSagas';


function* rootSaga(){
  yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga)
}

export default rootSaga;