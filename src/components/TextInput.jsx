import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
   text: {
      padding: 10,
      margin: 10,
      fontSize: 16,
      color: theme.text,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderRadius: 5
    },
});

const TextInput = ({ secure = false, error, ...props }) => {
  const textInputStyle = error ? [styles.text].concat( {borderColor: theme.error.color}) : [styles.text].concat( {borderColor: 'grey'});

  return <NativeTextInput secureTextEntry={secure} style={textInputStyle} {...props} />;
};

export default TextInput;