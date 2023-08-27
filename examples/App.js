import React from 'react';
import {View, Text, Image, StyleSheet, StyleSheet} from 'react-native';

// Styles
import colors from '../src/styles/colors';

const App = props => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>We're ready to roll!</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.giphy.com/media/l4Ep3mmmj7Bw3adWw/giphy.gif',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 46,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
