import React from 'react';
import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// =======================================================
import {
  createActorAction,
  updateActorAction,
} from '../../store/actions/actorActions';
import {emptyActor} from '../../constants';
import AppSelectElement from '../common/AppSelectElement';
import '../Movies/movieForm.css'
function ActorForm() {
  const dispatch = useDispatch();
  const {
    actorsList: {actors},
    // moviesList: {movies} 
  } = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();

  const currentActor = actors.find((actor) => actor.id === parseInt(id));

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Title is required'),
  });
  const goHome = () => navigate('/actors');

  const onActorSubmit = (values) => {
    !values.id
      ? dispatch(createActorAction({...values, id: Date.now()}))
      : dispatch(updateActorAction(values));
    goHome();
  };

  const renderSelect = (props) => {
    return <AppSelectElement field={props.field} meta={props.meta} />;
  };

  const renderForm = (props) => {
    console.log('props', props);
    return (
      <Form id="form">
        <Stack className="field-container">
          <Stack direction="row" spacing={2} sx={{bgcolor: 'aquamarine'}}>
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <Field name="fullName" />
          </Stack>
          <ErrorMessage name="fullName">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </Stack>
        <Stack direction="row" spacing={2} className="field-container">
          <label htmlFor="birthYear" className="label">
            Birth Year
          </label>
          <Field name="birthYear" as="select">
            {renderSelect}
          </Field>
        </Stack>
        <Stack direction="row" spacing={2} className="field-container">
          <label htmlFor="nationality" className="label">
            Nationality
          </label>
          <Field name="nationality" as="select">
					{renderSelect}
					</Field>
        </Stack>
        <fieldset className="items-container">
          <legend>Movies</legend>
          <FieldArray name="movies">
            {({
              push,
              remove,
              form: {
                values: {movies},
              },
            }) => {
              return (
                <Stack spacing={2}>
                  {movies.map((movie, index) => (
                    <Stack key={index} direction="row" spacing={2}>
                      <Field name={`movies[${index}]`}></Field>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="contained"
                          size="small"
                          startIcon={<RemoveIcon />}
                          onClick={() => remove(index)}
                        ></Button>
                      )}
                      <Button
                        variant="contained"
                        size="small"
                        type="button"
                        startIcon={<AddIcon />}
                        onClick={() => push('')}
                      ></Button>
                    </Stack>
                  ))}
                </Stack>
              );
            }}
          </FieldArray>
        </fieldset>
        <Stack direction="row" spacing={2} className="field-container">
          <label htmlFor="image" className="label">
            Photo
          </label>
          <Field name="image" as="textarea"></Field>
        </Stack>
        <Stack direction="row" spacing={8} justifyContent="center">
          <Button
            variant="contained"
            type="submit"
            disabled={!props.isValid}
            className="form-btn"
            size="large"
            startIcon={<SaveIcon />}
            // style={{ backgroundColor: 'teal' }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            type="button"
            className="form-btn"
            onClick={goHome}
            size="large"
            startIcon={<KeyboardReturnIcon />}
          >
            Return
          </Button>
          <Button
            variant="contained"
            type="reset"
            className="form-btn"
            size="large"
            startIcon={<ClearIcon />}
          >
            Reset
          </Button>
        </Stack>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentActor ? currentActor : emptyActor}
      onSubmit={onActorSubmit}
      validationSchema={schema}
    >
      {renderForm}
    </Formik>
  );
}

export default ActorForm;
