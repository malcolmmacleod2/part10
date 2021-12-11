import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

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
  return (
    <View>
      <View style={styles.container}>
        
          <Pressable>
            <Link to="/signin">
              <Text style={styles.text}>Sign In </Text>
            </Link>
            
          </Pressable>      
      </View>
      <View style={styles.container}>
        
          <Pressable>
            <Link to="/repositories">
              <Text style={styles.text}>Repositories</Text>
            </Link>
            
          </Pressable>
      </View>
    </View>
  )
  ;
};

export default AppBar;