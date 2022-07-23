import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// =============
import { emptyMovie } from '../../constants'
import './MovieItem.css';

function MovieItem({movies}) {
	const { id } = useParams();
	const film = movies.find((movie) => movie.id === parseInt(id));
	const movie = film ? film : emptyMovie;
	// console.log(movie)

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
				<h3>Actors</h3>
				{movie.actors.map((actor, index) => (
					<p key={index}>{actor}</p>
				))}
				<h3>Directors</h3>
				{movie.directors.map((director, index) => (
					<p key={index}>{director}</p>
				))}
				<h3>Studios</h3>
				{movie.studios.map((studio, index) => (
					<p key={index}>{studio}</p>
				))}
        </Stack>
			</Grid>
		</Grid>
	);
}

export default MovieItem;
