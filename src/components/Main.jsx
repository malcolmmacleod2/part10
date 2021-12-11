import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Switch>
        <Route path="/repositories" exact>
          <RepositoryList></RepositoryList>
        </Route>
         <Route path="/signin" exact>
          <SignIn></SignIn>
        </Route>
      </Switch>
      <Redirect to="/" />
    </View>
  );
};

export default Main;