import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// =============
import './MovieItem.css';

function MovieItem() {
	const { id } = useParams();
	const {
		moviesList: { movies },
	} = useSelector((state) => state);

	console.log(movies);
	const movie = movies.find((movie) => movie.id === parseInt(id));
	console.log(movie);

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
        <p>{movie.actorId}</p>
        <p>{movie.directorId}</p>
        <p>{movie.studioId}</p>
        </Stack>
			</Grid>
		</Grid>
	);
}

export default MovieItem;
