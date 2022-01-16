import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { View, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  reponame: '',
  rating: 0,
  review: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('User name is required'),
  reponame: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Minimum value is 0')
    .max(100, 'Maximum value is 100'),
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View testID="createRatingForm">
      <FormikTextInput
        testID="userNameField"
        name="username"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        testID="nameField"
        name="reponame"
        placeholder="Repository name"
      />
      <FormikTextInput
        testID="ratingField"
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        multiline
        testID="reviewField"
        name="review"
        placeholder="Review"
      />
      <Button
        testID="submitButton"
        onPress={onSubmit}
        title="Create a review"
      ></Button>
    </View>
  );
};

const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, reponame, rating, review } = values;
    console.log(`${username} ${reponame} ${rating} ${review}`);

    const result = await createReviewHandler(values);
    console.log({ result });

    history.push(`/repositories/${result}`);
  };

  const createReviewHandler = async ({
    username,
    reponame,
    rating,
    review,
  }) => {
    console.log('mutate here');
    const data = await createReview({ username, reponame, rating, review });
    console.log({ data });

    return data;
  };

  return <CreateReviewContainer onSubmit={onSubmit}></CreateReviewContainer>;
};

export default CreateReview;
