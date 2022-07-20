import { put } from 'redux-saga/effects';
import {
	createMovieError,
	createMovieRequest,
	createMovieSuccess,
	deleteMovieError,
	deleteMovieRequest,
	deleteMovieSuccess,
	gelMovieRequest,
	getAllMoviesError,
	getAllMoviesRequest,
  getAllMoviesSuccess,
	getMovieError,
	getMovieSuccess,
	updateMovieError,
	updateMovieRequest,
	updateMovieSuccess,
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
export function* getMovieSaga({payload}) {
	yield put(gelMovieRequest());
	try {
		const movie = yield cinemaService.get(`/movies/${payload}`)
                  .then(({data}) => data);
    yield put(getMovieSuccess(movie))
	} catch (error) {
		yield put(getMovieError(error));
	}
}

export function* createMovieSaga({payload}) {
	yield put(createMovieRequest());
	try {
		const newMovie = yield cinemaService.post('/movies', payload)
                  .then(({data}) => data);
    yield put(createMovieSuccess(newMovie))
	} catch (error) {
		yield put(createMovieError(error));
	}
}

export function* updateMovieSaga({payload}) {
	yield put(updateMovieRequest());
	try {
		const updatedMovie = yield cinemaService.put(`/movies/${payload.id}`, payload)
                  .then(({data}) => data);
    yield put(updateMovieSuccess(updatedMovie))
	} catch (error) {
		yield put(updateMovieError(error));
	}
}

export function* deleteMovieSaga({payload}) {
	yield put(deleteMovieRequest());
	try {
		yield cinemaService.delete(`/movies/${payload}`);
    yield put(deleteMovieSuccess(payload))
	} catch (error) {
		yield put(deleteMovieError(error));
	}
}
