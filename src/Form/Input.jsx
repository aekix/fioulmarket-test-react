import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './Input.css'

const Input = ({name, type, ...props}) => (
    <div className='form-item'>
        <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
        <div className='div-input'>
            <Field type={type} name={name} className={props.errors[name] && props.touched[name] ? 'has-error' : ''}/>
        { type === 'password' && <i onClick={() => {}} className="fa-solid fa-eye icon-hide"/>}
        </div>
        
        <ErrorMessage name={name} component="div" className='error-message'/>
    </div>
)

export default Input;