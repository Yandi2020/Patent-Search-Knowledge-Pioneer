import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Redirect, useHistory } from 'react-router-dom'

import { AuthContext } from './AuthContext'
import MyTextInput from './form/MyTextInput'
import MyPassword from './form/MyPassword'
import MyButton from './form/MyButton'

const initialValues = {
    username: '',
    password: '',
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label('Username'),
    password: Yup.string().required().label('Password'),
});

const Login = () => {
    const history = useHistory();
    const { logIn, authenticated } = useContext(AuthContext);

    if(authenticated) return <Redirect to='/' />

    return (
        <div className='login'>
            <h3>Welcome</h3>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    logIn(values);
                    history.push('/');
                }}
            >
                {() => (
                    <Form>
                        <MyTextInput 
                            name='username'
                            label='Username'
                            placeholder='username'
                        />

                        <MyPassword 
                            name='password'
                            label='Password'
                            placeholder='password'
                        />

                        <MyButton label='Login' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;

