import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import './LoginForm.css'
import { LoginFields as fields } from './fields'
import Input from './Input'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('You have to provide a valid email.')
      .required('Your email is required.'),
    password: Yup.string()
      .required('Password is required')
  });

const initialValues = { 
  email: '', 
  password: ''
}

const LoginForm = () => (
  <div className="LoginForm">
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
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
          <div>
            <a className='forget-password' href='#'>Mot de passe oublié ?</a>
          </div>
          <button type="submit" disabled={props.isSubmitting} className='button-submit'>
            Me connecter
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
