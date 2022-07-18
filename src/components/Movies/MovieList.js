import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import { getAllMoviesAction } from '../../store/actions/movieActions';

function MovieList() {
	const dispatch = useDispatch();
	const {
		moviesList: { movies },
	} = useSelector((state) => state);

	useEffect(() => {
		dispatch(getAllMoviesAction());
	}, [dispatch]);

	return (
		<ul className='movies-container'>
			{movies.map((movie) => (
				<li key={movie.id}>
					<Stack
						direction='row'
						spacing={3}
						justifyContent='flex-start'
						alignItems='center'>
						<Link to={`${movie.id}`} style={{minWidth: '300px'}}>
							<p>{movie.title}</p>
						</Link>
						<Link to={`new/${movie.id}`}>
							<p>Edit</p>
						</Link>
						<p>Delete</p>
					</Stack>
				</li>
			))}
		</ul>
	);
}

export default MovieList;
