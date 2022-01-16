import React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.headingBackground,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 10,
    // ...
  },
  text: {
    color: theme.colors.headingColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const getToken = async () => {
    const token = await authStorage.getAccessToken();

    return token;
  };

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const token = getToken();

  const { data } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const authorizedUser = data?.authorizedUser;

  return (
    <View>
      <View style={styles.container}>
        <ScrollView horizontal>
          {!authorizedUser && (
            <Pressable>
              <Link to="/signin">
                <Text style={styles.text}>Sign In </Text>
              </Link>
            </Pressable>
          )}

          {authorizedUser && (
            <Pressable onPress={() => signOut()}>
              <Text style={styles.text}>Sign Out </Text>
            </Pressable>
          )}

          {authorizedUser && (
            <Pressable>
              <Link to="/createreview">
                <Text style={styles.text}>Create a Review </Text>
              </Link>
            </Pressable>
          )}

          {!authorizedUser && (
            <Pressable>
              <Link to="/signup">
                <Text style={styles.text}>Sign Up</Text>
              </Link>
            </Pressable>
          )}

          <Pressable>
            <Link to="/repositories">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default AppBar;
