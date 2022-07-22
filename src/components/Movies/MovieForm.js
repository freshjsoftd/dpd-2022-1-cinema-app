import { emptyMovie } from '../../constants';
import {
	createMovieAction,
	updateMovieAction,
} from '../../store/actions/movieActions';
import './movieForm.css';
// import CreateMovieField from './CreateMovieField'
// ================================
import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function MovieForm() {
	const dispatch = useDispatch();
	const {
		moviesList: { movies },
	} = useSelector((state) => state);
	const { id } = useParams();
	const navigate = useNavigate();

	const currentMovie = movies.find((movies) => movies.id === parseInt(id));

	const schema = Yup.object().shape({
		title: Yup.string().required('Title is required'),
	});

	const goHome = () => navigate('/movies');

	const onMovieSubmit = (values) => {
		!values.id
			? dispatch(createMovieAction({ ...values, id: Date.now() }))
			: dispatch(updateMovieAction(values));
		goHome();
	};

	const renderForm = (props) => {
		console.log('props', props);
		return (
			<Form id='form'>
				<Stack className='field-container'>
					<Stack direction='row' spacing={2} sx={{bgcolor: 'aquamarine'}}>
						<label htmlFor='title' className='label'>
							Title
						</label>
						<Field name='title'/>
					</Stack>
					<ErrorMessage name='title'>
						{(msg) => <div className='error'>{msg}</div>}
					</ErrorMessage>
				</Stack>
				<fieldset className='items-container'>
					<legend>Actors</legend>
					<FieldArray name='actors'>
						{(fieldArrayProps) => {
							console.log('fieldArrayProps', fieldArrayProps);
							const {push, remove, form} = fieldArrayProps;
							const {values} = form;
							const {actors} = values;
							return (
								<Stack spacing={2}>
									{actors.map((actor, index) => (
										<Stack direction='row' key={index} spacing={2}>
											<Field name={`actors[${index}]`} />
											{/* <Field name={`actors[${index}]`}>
												{({field, form, meta}) => (
													<CreateMovieField 
														fieldName={field.name}
														array={movies}
														label='label'
														/>
												)}
											</Field> */}
											{index > 0 && <Button 
													type='button'
													variant='contained' 
													size='small'
													startIcon={<RemoveIcon/>}
													onClick={()=> remove(index)}></Button>}
											<Button 
													variant='contained' 
													size='small' 
													type='button' 
													startIcon={<AddIcon/>}
													onClick={() => push('')}
													></Button>
										</Stack>
									)) }
								</Stack>
							)
						}}
					</FieldArray>
				</fieldset>
				<fieldset className='items-container'>
					<legend>Directors</legend>
					<FieldArray name='directors'>
						{({push, remove, form: {values: {directors}}}) => {
							return (
								<Stack spacing={2}>
									{directors.map((director, index) => (
										<Stack key={index} direction='row' spacing={2}>
											<Field name={`directors[${index}]`}/>
											{index > 0 && <Button 
													type='button'
													variant='contained' 
													size='small'
													startIcon={<RemoveIcon/>}
													onClick={()=> remove(index)}></Button>}
											<Button 
													variant='contained' 
													size='small' 
													type='button' 
													startIcon={<AddIcon/>}
													onClick={() => push('')}
													></Button>
										</Stack>
									))}
								</Stack>
							)
						}}
					</FieldArray>
				</fieldset>
				<fieldset className='items-container'>
					<legend>Studios</legend>
					<FieldArray name='studios'>
						{({push, remove, form: {values}}) => {
							const {studios} = values;
							return (
								<Stack spacing={2}>
									{studios.map((studio, index) => (
										<Stack key={index} direction='row' spacing={2}>
											<Field name={`studios[${index}]`}/>
											{index > 0 && <Button 
													type='button'
													variant='contained' 
													size='small'
													startIcon={<RemoveIcon/>}
													onClick={()=> remove(index)}></Button>}
											<Button 
													variant='contained' 
													size='small' 
													type='button' 
													startIcon={<AddIcon/>}
													onClick={() => push('')}
													></Button>
										</Stack>
									))}
								</Stack>
							)
						}}
					</FieldArray>
				</fieldset>
				<Stack direction='row' spacing={2} className='field-container'>
					<label htmlFor='poster' className='label'>
						Poster
					</label>
					<Field name='poster' as='textarea'></Field>
				</Stack>
				<Stack direction='row' spacing={8} justifyContent='center'>
					<Button
						variant='contained'
						type='submit'
						disabled={!props.isValid}
						className='form-btn'
						size='large'
						startIcon={<SaveIcon />}
						// style={{ backgroundColor: 'teal' }}
						>
						Save
					</Button>
					<Button
						variant='contained'
						type='button'
						className='form-btn'
						onClick={goHome}
						size='large'
						startIcon={<KeyboardReturnIcon />}>
						Return
					</Button>
					<Button
						variant='contained'
						type='reset'
						className='form-btn'
						size='large'
						startIcon={<ClearIcon />}>
						Reset
					</Button>
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
