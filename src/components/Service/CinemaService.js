import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieForm from '../Movies/MovieForm';

const styles = {
	backgroundColor: 'rgb(25, 118, 210)',
	border: '1px solid',
};

function CinemaService() {
	return (
		<>
			<div style={styles}>CinemaService</div>
			<Routes>
				<Route path='/movies/new' element={<MovieForm />} />
				<Route path='/movies/new/:id' element={<MovieForm />}/>
			</Routes>
		</>
	);
}

export default CinemaService;
