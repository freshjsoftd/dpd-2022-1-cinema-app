import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// =======================================
import { deleteActorAction } from '../../store/actions/actorActions';

function ActorList({actors}) {

  const dispatch = useDispatch();
	
	const onDelete = (id) => { 
		dispatch(deleteActorAction(id))
	 }
   console.log("Actors", actors)
  return (
    <ul className='actors-container'>
			{actors.map((actor) => (
				<li key={actor.id}>
					<Stack
						direction='row'
						spacing={3}
						justifyContent='flex-start'
						alignItems='center'>
						<Link to={`${actor.id}`} className='title-link'>
							<p>{actor.fullName}</p>
						</Link>
						<Link to={`new/${actor.id}`}>
							<EditIcon/>
						</Link>
						<DeleteIcon 
							onClick={() => onDelete(actor.id)}/>
					</Stack>
				</li>
			))}
		</ul>
  )
}

export default ActorList