import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const BasicTextInput = () => {
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    fontSize: 16,
  },
});

export default BasicTextInput;
