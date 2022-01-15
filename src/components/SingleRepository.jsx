import React from 'react';
import {
  View,
  Button,
  Linking,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import theme from '../theme';

const singleRepositoryStyles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: theme.colors.textSecondary,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

const reviewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 5,
  },
  infoContainer: {
    flexDirection: 'column',
    margin: 20,
  },
  heading: {
    fontSize: theme.fontSizes.heading,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
    width: '100%',
    backgroundColor: '#000',
  },
  textRow: {
    flex: 1,
  },
  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

const RepositoryInfo = ({ repository }) => {
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

const ReviewItem = ({ review }) => {
  const createdDate = format(parseISO(review.createdAt), 'dd.MM.yyyy');
  // Single review item
  return (
    <View style={reviewStyles.container}>
      <View style={singleRepositoryStyles.circle}>
        <Text>{review.rating}</Text>
      </View>
      <View style={reviewStyles.infoContainer}>
        <Text style={reviewStyles.heading}>{review.user.username}</Text>
        <Text style={reviewStyles.subheading}>{createdDate}</Text>
        <View style={reviewStyles.textRow}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositorySeparator = () => {
  return <View style={reviewStyles.separator}></View>;
};

const SingleRepository = ({ repoId }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id: repoId },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const repository = data?.repository;

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  console.log({ reviews });

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={() => <RepositorySeparator></RepositorySeparator>}
      // ...
    />
  );
};

export default SingleRepository;
