import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
  let [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    const credentials = { username, password };

    const { data } = await mutate({ variables: credentials });

    return data?.createUser?.id;
  };

  return [createUser, result];
};

export default useCreateUser;
