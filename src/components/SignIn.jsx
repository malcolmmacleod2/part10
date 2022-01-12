import { Formik } from 'formik';
import React from 'react';

import { View, Button, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Name is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View testID="signInForm">
      <FormikTextInput
        testID="userNameField"
        name="username"
        placeholder="Name"
      />
      <FormikTextInput
        testID="passwordField"
        secure={true}
        name="password"
        placeholder="Password"
      />
      <Button testID="submitButton" onPress={onSubmit} title="Sign In"></Button>
    </View>
  );
};

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

function SignIn() {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(`${username} ${password}`);

    signInHandler(username, password);
  };

  const signInHandler = async (username, password) => {
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/repositories');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit}></SignInContainer>;
}

export default SignIn;
export { SignInContainer };
