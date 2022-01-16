import { Formik } from 'formik';
import React from 'react';

import { View, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  confirmpassword: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Name is required'),
  password: yup.string().required('Password is required'),
  confirmpassword: yup.string().required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View testID="signUpForm">
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
      <FormikTextInput
        testID="confirmPasswordField"
        secure={true}
        name="confirmpassword"
        placeholder="Confirm Password"
      />
      <Button testID="submitButton" onPress={onSubmit} title="Sign Up"></Button>
    </View>
  );
};

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

function SignUp() {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    signUpHandler(username, password);
  };

  const signUpHandler = async (username, password) => {
    try {
      const id = await createUser({ username, password });
      console.log(id);

      if (id) {
        try {
          const { data } = await signIn({ username, password });
          console.log(data);
          history.push('/repositories');
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit}></SignUpContainer>;
}

export default SignUp;
export { SignUpContainer };
