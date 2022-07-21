import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// ================================================
import { deleteMovieAction} from '../../store/actions/movieActions';

function MovieList({movies}) {
	const dispatch = useDispatch();
	
	const onDelete = (id) => { 
		dispatch(deleteMovieAction(id))
	 }

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
							<EditIcon/>
						</Link>
						<DeleteIcon 
							onClick={() => onDelete(movie.id)}/>
					</Stack>
				</li>
			))}
		</ul>
	);
}

export default MovieList;
