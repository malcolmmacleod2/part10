import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
});

const TextInput = ({ style, secure = false, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput secureTextEntry={secure} style={textInputStyle} {...props} />;
};

export default TextInput;