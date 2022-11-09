import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <h1>
        User Onboarding
      </h1>
      <Form />
    </div>
  );
}

export default App;
