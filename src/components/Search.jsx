import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { AuthContext } from './AuthContext'
import { search } from './store/actions'
import MyTextInput from './form/MyTextInput'
import MyButton from './form/MyButton';
import MySelectInput from './form/MySelectInput';

const Search = ({ search }) => {
    const { authenticated } = useContext(AuthContext);

    if(!authenticated) return <Redirect to='/login' />

    const initialValues = {
        select: '', 
        content: ''
    }
    
    const validationSchema = Yup.object().shape({
        select: Yup.string().required().label('Select'),
        content: Yup.string().required().label('Content')
    })

    return (
        <div className='search'>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}

                onSubmit={(values, { resetForm }) => {
                    search(values);
                    resetForm(initialValues)
                }}
            >
                {() => (
                    <Form className='form'>
                        <MySelectInput 
                            name='select' 
                            optionOne={{value: 'patent title', label: 'Patent Title'}} 
                            optionTwo={{value: 'chemical type 1', label: 'Chemical Name'}}
                        />

                        <MyTextInput 
                            name='content' 
                            placeholder='content to search...' 
                        />
                        
                        <MyButton label='Search' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
      search: (values) => { dispatch(search(values)) }
    }
}

export default connect(null, mapDispatchToProps)(Search); 

