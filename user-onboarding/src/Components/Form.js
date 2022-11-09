import React from 'react';

function Form(){
  return(
    <form>
      <label>Name:
        <input 
          name='first_name'
          placeholder='FirstName'
          type='text'
          // value={}
          // onChange={onChange}
        />
        <input 
          name='last_name'
          placeholder='LastName'
          type='text'
          // value={}
          // onChange={onChange}
        />
      </label>
      <label>Email:
        <input 
          name='email'
          placeholder='Email'
          type='email'
          // value={}
          // onChange={onChange}
        />
      </label>
      <label>Password:
        <input 
          name='password'
          placeholder='Password'
          type='text'
          // value={}
          // onChange={onChange}
        />
      </label>
      <label>Terms of Service
        <input 
          type='checkbox'
          name='terms-of-service'
          // checked={}
          // onChange={onChange}
        />
      </label>
      <button>Sumbit</button>
    </form>
  )
}

export default Form