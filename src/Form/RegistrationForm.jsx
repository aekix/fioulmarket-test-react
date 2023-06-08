import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import './Form.css'
import { RegisterFields as fields } from './fields'
import Input from './Input'

const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
      .email('You have to provide a valid email.')
      .required('Your email is required.'),
      password: Yup.string()
      .required('Password is required')
      .min(5, 'Your password must be between 5 and 16 characters length.')
      .max(16, 'Your password must be between 5 and 16 characters length.'),
      confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Your passwords must match.'),
  });

const initialValues = { 
  email: '', 
  password: '',
  confirm: '' 
}

const RegistrationForm = () => (
  <div className="RegisterForm">
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(props) => (
        <Form>
          {fields.map(({name, type}) => 
            ( 
              <Input name={name} type={type} key={name} {...props}/>
            ))
          }
          <button type="submit" disabled={props.isSubmitting} className='button-submit'>
            Valider
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegistrationForm;
