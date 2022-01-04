import { Formik } from 'formik'
import * as yup from 'yup';

function App() {

  const Schema = yup.object().shape({
    email: yup.string().email().required,
    password: yup.string().required(),
    passwordConfirmation: yup.string().required().oneOf([yup.ref('password'), 'Passwords must match'])
  })
  return (
    <>
      <Formik initialValues={{
              username: '',
              email: '',
              password: '',
              passwordConfirmation: ''
            }}
            validationSchema={Schema}
            onSubmit={(values) => {
              console.log({values})
            }}>
            {({ values, handleSubmit, handleBlur, handleChange, isValid, errors, touched}) => (
              <form onSubmit={handleSubmit}>
                  <input name='Username'
                        placeholder='username'
                        value={values.username}
                        onChange={(_, event) => {
                          handleChange(event)
                        }}
                        onBlur={handleBlur}
                  />
                  <input name='email'
                        placeholder='Email'
                        value={values.email}
                        onChange={(val, event) => {
                          handleChange(event)
                        }}
                        onBlur={handleBlur}
                  />
                  <input name='password'
                        placeholder='Password'
                        value={values.password}
                        onChange={(val, event) => {
                          handleChange(event)
                        }}
                        onBlur={handleBlur}
                  />
                  <input name='passwordConfirmation'
                        placeholder='Re-enter password'
                        value={values.passwordConfirmation}
                        onChange={(val, event) => {
                          handleChange(event)
                        }}
                        onBlur={handleBlur}
                  />
                  <button type='submit'
                          disabled={!isValid}>Register</button>
               </form>
            )}
      </Formik>
    </>
  );
}

export default App;
