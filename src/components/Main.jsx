import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import {
  Route,
  Switch,
  Redirect,
  useParams,
  useRouteMatch,
} from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  useParams();
  const match = useRouteMatch('/repositories/:repoId');
  const matchedId = match?.params?.repoId;

  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Switch>
        <Route path="/repositories/:repoId">
          <SingleRepository repoId={matchedId}></SingleRepository>
        </Route>
        <Route path="/repositories" exact>
          <RepositoryList></RepositoryList>
        </Route>
        <Route path="/createreview" exact>
          <CreateReview></CreateReview>
        </Route>
        <Route path="/signin" exact>
          <SignIn></SignIn>
        </Route>
        <Route path="/signup" exact>
          <SignUp></SignUp>
        </Route>
      </Switch>
      <Redirect to="/" />
    </View>
  );
};

export default Main;
