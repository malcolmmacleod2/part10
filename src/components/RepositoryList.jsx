import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.textSecondary,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigateToItem = ({ item }) => {
    history.push(`repositories/${item.id}`);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigateToItem({ item })}>
        <RepositoryItem item={item}></RepositoryItem>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
export { RepositoryListContainer };
