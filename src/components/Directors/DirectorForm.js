import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import * as Yup from 'yup';
// =========
import {emptyDirector} from '../../constants';
import {
  createDirectorAction,
  updateDirectorAction,
} from '../../store/actions/directorActions';
import AppSelectElement from '../common/AppSelectElement';

function DirectorForm() {
  const dispatch = useDispatch();
  const {
    directorsList: {directors},
    // moviesList: {movies}
  } = useSelector((state) => state);
  const {id} = useParams();
  const navigate = useNavigate();
  const currentDirector = directors.find(
    (director) => director.id === parseInt(id),
  );

  const onDirectorSubmit = (values) => {
    !values.id
      ? dispatch(createDirectorAction({...values, id: Date.now()}))
      : dispatch(updateDirectorAction(values));
    goHome();
  };
  const goHome = () => navigate('/directors');

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Field is required'),
  });

  const renderSelect = (props) => {
    return <AppSelectElement field={props.field} meta={props.meta} />;
  };

  const renderFormik = (props) => {
    console.log(props);
    return (
      <Form>
        <Stack>
          <Stack direction="row" spacing={2}>
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <Field name="fullName"></Field>
          </Stack>
          <ErrorMessage name="fullName">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </Stack>
        <Stack direction="row" spacing={2}>
          <label htmlFor="birthYear" className="label">
            Birth Year
          </label>
          <Field name="birthYear" as="select">
            {renderSelect}
          </Field>
        </Stack>
        <Stack direction="row" spacing={2}>
          <label htmlFor="nationality" className="label">
            Nationality
          </label>
          <Field name="nationality" as="select">
            {renderSelect}
          </Field>
        </Stack>
        <fieldset className="items-container">
          <legend>Movies</legend>
          <FieldArray name='movies'>
            {({push, remove, form: {values: {movies}}}) => {
              return (
                <Stack spacing={4}>
                    {movies.map((movie, index) => (
                      <Stack 
                        key={index}
                        direction='row'
                        spacing={2}
                      >
                        <Field name={`movies[${index}]`}></Field>
                        {index > 0 && (
                          <Button
                          type='button'
                          variant='contained'
                          size='small'
                          startIcon={<RemoveIcon />}
                          onClick={() => remove(index)}
                          />
                        )}
                        <Button
                          type='button'
                          variant='contained'
                          size='small'
                          startIcon={<AddIcon />}
                          onClick={() => push('')}
                          />
                      </Stack>
                    ))}
                </Stack>
              )
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
      initialValues={currentDirector ? currentDirector : emptyDirector}
      onSubmit={onDirectorSubmit}
      validationSchema={schema}
    >
      {renderFormik}
    </Formik>
  );
}

export default DirectorForm;
