import { Formik } from 'formik';
import React from 'react';

import { View, Button, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
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
        name="username"
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

 const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(`${username} ${password}`);

    try {
      const {data} = await signIn({username, password});
      console.log(data);
    } catch (e) {
      console.log(e);
    }
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