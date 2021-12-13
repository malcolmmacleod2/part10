import { Formik } from 'formik';
import React from 'react';

import { View, Button, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const initialValues = {
  name: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  password: yup
    .string()
    .required('Password is required')
});

const styles = StyleSheet.create({
  container: {
      padding: 20,
    }
});

const SignInForm = ({ onSubmit }) => {


  return (
    <View>
      <FormikTextInput
        name="name"
        placeholder="Name"
      />
      <FormikTextInput
        secure={true}
        name="password"
        placeholder="Password"
      />
      <Button onPress={onSubmit} title="Sign In"></Button>
    </View>
  );
};

function SignIn() {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignIn;