import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
  let [mutate, result] = useMutation(AUTHORIZE_USER);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    result = await mutate({ variables: credentials });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
