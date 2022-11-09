import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';
import schema from './validation/formSchema';

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

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  const inputChange =(name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
    }



  const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

  return (
    <div className="App">
      
      <Form 
      values={formValues} 
      change={inputChange} 
      errors={formErrors}
      submit={formSubmit}
      />
    </div>
  );
}

export default App;
