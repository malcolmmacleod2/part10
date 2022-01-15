import React from 'react';
import { View, Button, Linking } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

const SingleRepository = ({ repoId }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id: repoId },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const repository = data?.repository;

  return (
    <View testID="singleRepositoryView">
      <RepositoryItem item={repository}></RepositoryItem>
      <Button
        title="Open in GitHub"
        onPress={() => Linking.openURL(repository.url)}
      ></Button>
    </View>
  );
};

export default SingleRepository;
