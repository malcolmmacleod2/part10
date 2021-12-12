import { Formik } from 'formik';
import React from 'react';
import theme from '../theme';

import { View, Button, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';

const initialValues = {
  name: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
      padding: 20,
    },
    text: {
      padding: 10,
      margin: 10,
      fontSize: 16,
      color: theme.text,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderRadius: 5
    },
});

const SignInForm = ({ onSubmit }) => {


  return (
    <View>
      <FormikTextInput
        style={styles.text}
        name="name"
        placeholder="Name"
      />
      <FormikTextInput
        secure={true}
        style={styles.text}
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignIn;