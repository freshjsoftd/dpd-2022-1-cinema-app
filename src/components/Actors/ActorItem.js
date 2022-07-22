import React from 'react'
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// ====================================
import { emptyActor } from '../../constants'

function ActorItem({actors}) {
  const { id } = useParams();
	const star = actors.find((actor) => actor.id === parseInt(id));
	const actor = star ? star : emptyActor;
  return (
    <Grid container>
			<Grid item lg={12} md={12} xl={12} sm={12} xs={12}
          className='actor-header'
          sx={{textAlign: 'center'}}
      >
				<h1>{actor.fullName}</h1>
			</Grid>
			<Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
				<img src={actor.image} alt='poster'></img>
			</Grid>
			<Grid item lg={6} md={6} xl={6} sm={6} xs={6}
          sx={{textTransform: 'capitalize'}}>
        <Stack>
				<h2>Actor definition</h2>
        <h3>Full Name: {actor.fullName}</h3>
        <h3>Birth Year: {actor.birthYear}</h3>
        <h3>Nationality: {actor.nationality}</h3>
				<h3>Movies</h3>
				{actor.movies.map((movie, index) => (
					<p key={Date.now() + index}>{movie}</p>
				))}
        </Stack>
			</Grid>
		</Grid>
  )
}

export default ActorItem