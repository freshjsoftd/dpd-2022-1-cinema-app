import { takeLatest } from 'redux-saga/effects';

import ACTIONS_TYPES from '../store/actions/actionsTypes';
import {
	createActorSaga,
	deleteActorSaga,
	getAllActorsSaga,
	updateActorSaga,
} from './actorsSagas';
import {
	createMovieSaga,
	deleteMovieSaga,
	getAllMoviesSaga,
	// getMovieSaga,
	updateMovieSaga,
} from './moviesSagas';

function* rootSaga() {
	yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga);
	// yield takeLatest(ACTIONS_TYPES.GET_MOVIE_ACTION, getMovieSaga);
	yield takeLatest(ACTIONS_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga);
	yield takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga);
	yield takeLatest(ACTIONS_TYPES.PUT_MOVIE_ACTION, updateMovieSaga);
	// ==========================
	yield takeLatest(ACTIONS_TYPES.GET_ACTORS_ACTION, getAllActorsSaga);
	yield takeLatest(ACTIONS_TYPES.POST_ACTOR_ACTION, createActorSaga);
	yield takeLatest(ACTIONS_TYPES.PUT_ACTOR_ACTION, updateActorSaga);
	yield takeLatest(ACTIONS_TYPES.DELETE_ACTOR_ACTION, deleteActorSaga);
}

export default rootSaga;
