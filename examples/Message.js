import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Message = ({children}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 24,
  },
});

export default Message;
