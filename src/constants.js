export const BASE_URL = 'http://localhost:5000';

export const emptyMovie = {
	id: null,
	title: '',
	directors: [''],
	actors: [''],
	studios: [''],
	poster: '',
};

export const emptyActor = {
	id: null,
	movies: [''],
	fullName: '',
	birthYear: '',
	nationality: '',
	image: '',
};

export const nationalities = [
	'USA',
	'United Kingdom',
	'Canada',
	'France',
	'Australia',
	'Germany',
	'Ukraine',
	'Italy'
]
