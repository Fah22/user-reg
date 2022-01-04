import { Formik } from 'formik'

function App() {
  return (
    <>
      <Formik initialValues={{
              username: '',
              email: '',
              password: '',
              passwordConfirmation: ''
            }}
            onSubmit={(values) => {
              console.log({values})
            }}>
            {({ values, handleSubmit, handleBlur, isValid, errors, touched}) => (
              <form>
                  <input name='Username'
                        placeholder='username'
                  />
                  <input name='email'
                        placeholder='Email'
                  />
                  <input name='password'
                        placeholder='Password'
                  />
                  <input name='passwordConfirmation'
                        placeholder='Re-enter password'
                  />
               </form>
            )}
      
      </Formik>
    </>
  );
}

export default App;
