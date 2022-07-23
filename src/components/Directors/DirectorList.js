import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDirectorAction } from '../../store/actions/directorActions';

function DirectorList({directors}) {

  const dispatch = useDispatch();

  const onDelete = (id) => { 
		dispatch(deleteDirectorAction(id))
	 }

  return (
    <ul className='movies-container'>
			{directors.map((director) => (
				<li key={director.id}>
					<Stack
						direction='row'
						spacing={3}
						justifyContent='flex-start'
						alignItems='center'>
						<Link to={`${director.id}`} className='title-link'>
							<p>{director.fullName}</p>
						</Link>
						<Link to={`new/${director.id}`}>
							<EditIcon/>
						</Link>
						<DeleteIcon 
							onClick={() => onDelete(director.id)}/>
					</Stack>
				</li>
			))}
		</ul>
  )
}

export default DirectorList