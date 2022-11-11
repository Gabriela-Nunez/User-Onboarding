import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';
import schema from './validation/formSchema';
import './App.css';

const initialFormValues = {
  username: '',
  userLastName: '',
  email: '',
  password: '',
  termsOfService: false 
}

const initialFormErrors ={
  username: '',
  userLastName: '',
  email: '',
  password: '',
  termsOfService: ''
}

const initialDisabled = true

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [newUsers, setNewUsers] = useState([]);
  const [disabled, setDisabled] = useState(initialDisabled);


  const inputChange =(name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setNewUsers([ res.data, ...newUsers])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
    }



  const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      
      <Form 
      values={formValues} 
      change={inputChange} 
      errors={formErrors}
      submit={formSubmit}
      disabled={disabled}
      />
      {
      newUsers.map(newUser => {
        return(  
        <div key={newUser.id} className='newUser'>
          <h2>Welcome!!!</h2>
          <p>{newUser.username}</p>
          <p>{newUser.userLastName}</p>
          <p>{newUser.email}</p>
          <p>{newUser.createdAt}</p>
        </div>)
      })}
    </div>
  );
}

export default App;
