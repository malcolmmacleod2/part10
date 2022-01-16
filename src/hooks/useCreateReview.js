import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  let [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ username, reponame, rating, review }) => {
    const createReviewInput = {
      ownerName: username,
      repositoryName: reponame,
      rating: Number(rating),
      text: review,
    };

    const { data } = await mutate({ variables: createReviewInput });

    console.log({ data });

    return data?.createReview?.repositoryId;
  };

  return [createReview, result];
};

export default useCreateReview;
