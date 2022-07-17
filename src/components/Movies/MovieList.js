import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { getAllMoviesAction } from '../../store/actions/movieActions'

function MovieList() {

  const dispatch = useDispatch();
  const {moviesList: {movies}} = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllMoviesAction())
  }, [dispatch])


  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
          <Link to={`new/${movie.id}`}>
            <p>Edit</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList