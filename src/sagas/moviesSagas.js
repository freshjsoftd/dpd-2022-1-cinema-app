import { put } from 'redux-saga/effects';
import {
	getAllMoviesError,
	getAllMoviesRequest,
  getAllMoviesSuccess,
} from '../store/actions/movieActions';
import cinemaService from '../cinema-service';

export function* getAllMoviesSaga() {
	yield put(getAllMoviesRequest());
	try {
		const movies = yield cinemaService.get('/movies')
                  .then(({data}) => data);
    yield put(getAllMoviesSuccess(movies))
	} catch (error) {
		yield put(getAllMoviesError(error));
	}
}
