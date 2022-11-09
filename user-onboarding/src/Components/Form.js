import React from 'react';

const Form = (props) => {

    const { values, submit, change, errors } = props;
    
    const onSubmit = evt => {
      evt.preventDefault();
      submit();
    }

    const onChange = evt => {
      const { name, value, type, checked } = evt.target
      const valueToUse = type === 'checkbox' ? checked : value;
       change(name, valueToUse);
    }

  return(
    <div>
      <h1>Onboarding User Form</h1>

      <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.userLastName}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>

      <form onSubmit={onSubmit}>
        <label>Name:
          <input 
            name='username'
            placeholder='FirstName'
            type='text'
            value={values.username}
            onChange={onChange}
          />

          <input 
            name='userLastName'
            placeholder='LastName'
            type='text'
            value={values.userLastName}
            onChange={onChange}
          />
        </label>

        <label>Email:
          <input 
            name='email'
            placeholder='Email'
            type='email'
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>Password:
          <input 
            name='password'
            placeholder='Password'
            type='text'
            value={values.password}
            onChange={onChange}
          />
        </label>

        <label>Terms of Service
          <input 
            type='checkbox'
            name='termsOfService'
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
        
        <input type='submit' value='Create New User' />
      </form>
    </div>
  )
}

export default Form