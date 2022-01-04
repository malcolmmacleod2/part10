import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  let [mutate, result] = useMutation(AUTHORIZE_USER);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    result = await mutate({ variables: credentials });

    await authStorage.setAccessToken(result?.data?.authorize?.accessToken);
    apolloClient.resetStore();

    return result;
  };

  return [signIn, result];
};

export default useSignIn;
