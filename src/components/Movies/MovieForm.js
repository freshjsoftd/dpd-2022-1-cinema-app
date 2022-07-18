import { emptyMovie } from '../../constants';
import './movieForm.css';
// ================================
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function MovieForm() {

	const dispatch = useDispatch();
	const {
		moviesList: { movies },
	} = useSelector((state) => state);
	const { id } = useParams();

	const currentMovie = movies.find((movies) => movies.id === parseInt(id));

	const schema = Yup.object().shape({
		title: Yup.string().required('Title is required'),
	});

	const onMovieSubmit = (values) => {
		!values.id ? console.log('create') : console.log('update');
	};

	const renderForm = ({ isValid }) => {
		return (
			<Form id='form'>
				<Stack className='field-container'>
					<Stack direction='row' spacing={2}>
						<label htmlFor='title' className='label'>Title</label>
						<Field name='title'></Field>
					</Stack>
					<ErrorMessage name='title'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
				</Stack>
				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='actorId' className='label'>Actor</label>
					<Field name='actorId'></Field>
				</Stack>
				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='directorId' className='label'>Director</label>
					<Field name='directorId'></Field>
				</Stack>
				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='studioId' className='label'>Studio</label>
					<Field name='studioId'></Field>
				</Stack>
				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='poster' className='label'>Poster</label>
					<Field name='poster' as='textarea'></Field>
				</Stack>
        <Stack 
              direction='row'
              spacing={8}
              justifyContent='center'
              >
            <Button 
                variant='contained'
                type="submit"
                disabled={!isValid}
                className="form-btn"
                size="large"
                startIcon={<SaveIcon/>}
                style={{backgroundColor: 'teal'}}
            >
              Save</Button>
            <Button 
                variant='contained'
                type="button"
                className="form-btn"
                // onClick={goHome}
                size="large"
                startIcon={<KeyboardReturnIcon/>}
            >
              Return</Button>
            <Button 
                variant='contained'
                type="reset"
                className="form-btn"
                size="large"
                startIcon={<ClearIcon/>}
            >
              Reset</Button>
          </Stack>
			</Form>
		);
	};

	return (
		<Formik
			initialValues={currentMovie ? currentMovie : emptyMovie}
			onSubmit={onMovieSubmit}
			validationSchema={schema}>
			{renderForm}
		</Formik>
	);
}

export default MovieForm;
