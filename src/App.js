import { Formik } from 'formik'
import * as Yup from 'yup'
import { Tooltip, Whisper, Form } from 'rsuite'
import { useDispatch } from 'react-redux'
import { updateVal } from './features/registerUserSlice'
// to lessen the number of actions being dispatched by redux, import useDebounceCallback
import { useDebouncedCallback } from 'use-debounce'

function App() {

  const dispatch = useDispatch()

  const Schema = Yup.object().shape({
    email: Yup.string().email().required,
    password: Yup.string().required(),
    passwordConfirmation: Yup.string().required().oneOf([Yup.ref('password'), 'Passwords must match'])
  })

  const updateStore = useDebouncedCallback((key, val) => {
    dispatch(updateVal({ key, val }))
  }, 250)

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
            {({ values, handleSubmit, handleBlur, handleChange, isValid, errors, touched, validateOnChange}) => (
              <Form onSubmit={handleSubmit}>
              <Whisper trigger='none'
                       open={errors.username && touched.username}
                       speaker={<Tooltip>{errors.username}</Tooltip>}
              >
                <input name='Username'
                        placeholder='username'
                        type="text"
                        value={values.username}
                        onChange={(val, event) => {
                          handleChange(event)
                          updateStore('username', val)
                        }}
                        onBlur={handleBlur}
                        style={{ borderColor: errors.username && errors.touched ? 'red' : 'inherit'}}
                  />
              </Whisper>
              <Whisper trigger='none'
                       open={errors.email && touched.email}
                       speaker={<Tooltip>{errors.email}</Tooltip>}
              >
                <input name='email'
                        placeholder='Email'
                        type="email"
                        value={values.email}
                        onChange={(val, event) => {
                          handleChange(event)
                          updateStore('email', val)
                        }}
                        onBlur={handleBlur}
                        style={{ borderColor: errors.email && errors.touched ? 'red' : 'inherit'}}
                  />
              </Whisper>
              <Whisper trigger='none'
                       open={errors.password && touched.password}
                       speaker={<Tooltip>{errors.password}</Tooltip>}
              >
                <input name='password'
                        placeholder='Password'
                        type="password"
                        value={values.password}
                        onChange={(val, event) => {
                          handleChange(event)
                          updateStore('password', val)
                        }}
                        onBlur={handleBlur}
                        style={{ borderColor: errors.password && errors.touched ? 'red' : 'inherit'}}
                  />
              </Whisper>   
              <Whisper trigger='none'
                       open={errors.username && touched.username}
                       speaker={<Tooltip>{errors.username}</Tooltip>}
              >
                 <input name='passwordConfirmation'
                        placeholder='Re-enter password'
                        type="password"
                        value={values.passwordConfirmation}
                        onChange={(val, event) => {
                          handleChange(event)
                          updateStore('passwordConfirmation', val)
                        }}
                        onBlur={handleBlur}
                        style={{ borderColor: errors.passwordConfirmation && errors.touched ? 'red' : 'inherit'}}
                  />
              </Whisper> 
              <button type='submit'
                      disabled={!isValid}>Register
              </button>
            </Form>
            )}
      </Formik>
    </>
  );
}

export default App;
