import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// =============
import './MovieItem.css';

function MovieItem({movies}) {
	const { id } = useParams();
	const movie = movies.find((movie) => movie.id === parseInt(id));
	console.log(movie)

	return (
		<Grid container>
			<Grid item lg={12} md={12} xl={12} sm={12} xs={12}
          className='movie-header'
      >
				<h1>{movie.title}</h1>
			</Grid>
			<Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
				<img src={movie.poster} alt='poster'></img>
			</Grid>
			<Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <Stack>
				<h2>Movie definition</h2>
				<h2>Actors</h2>
				{movie.actors.map((actor, index) => (
					<p key={Date.now() + index}>{actor}</p>
				))}
				<h2>Directors</h2>
				{movie.directors.map((director, index) => (
					<p key={Date.now() + index}>{director}</p>
				))}
				<h2>Studios</h2>
				{movie.studios.map((studio, index) => (
					<p key={Date.now() + index}>{studio}</p>
				))}
        
        </Stack>
			</Grid>
		</Grid>
	);
}

export default MovieItem;
