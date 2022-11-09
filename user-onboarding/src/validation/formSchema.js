import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('First Name is required!')
    .min(4, 'First Name must be more than 4 characters long!'),
  userLastName: yup
    .string()
    .trim()
    .required('Last Name is required!')
    .min(4, 'Last Name must be more than 4 characters long!'),
  email: yup
    .string()
    .email('Must enter a valid email address!')
    .required('Must enter an email address!'),
  password: yup
    .string()
    .required('You must enter a password!')
    .min(8, 'Password must be more than 8 characters long!'),
  termsOfService: yup
    .boolean()
    .oneOf([true], 'Must agree to Terms of Service!')

})


export default formSchema