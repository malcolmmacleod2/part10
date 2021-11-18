import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.headingBackground,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 10
    // ...
  },
  text: {
      color: theme.colors.headingColor,
      fontSize: 24,
      fontWeight: 'bold'
  }, 
  heading: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

const AppBar = () => {
  return <View style={styles.container}><Pressable><Text style={styles.text}>Repositories</Text></Pressable></View>;
};

export default AppBar;