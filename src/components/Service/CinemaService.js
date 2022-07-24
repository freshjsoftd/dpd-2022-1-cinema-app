import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorForm from '../Actors/ActorForm';
import DirectorForm from '../Directors/DirectorForm';
import MovieForm from '../Movies/MovieForm';

const styles = {
	textAlign: 'center',
};

function CinemaService() {
	return (
		<>
			<h1 style={styles}>CinemaService</h1>
			<Routes>
				<Route path='/movies/new' element={<MovieForm />} />
				<Route path='/movies/new/:id' element={<MovieForm />}/>
				<Route path='/actors/new' element={<ActorForm />} />
				<Route path='/actors/new/:id' element={<ActorForm />}/>
				<Route path='/directors/new' element={<DirectorForm />} />
				<Route path='/directors/new/:id' element={<DirectorForm />}/>
			</Routes>
		</>
	);
}

export default CinemaService;
