import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../../src/styles/colors';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Migracode Masterclass!</Text>
      <Image
        source={{uri: 'https://media.giphy.com/media/eoVusT7Pi9ODe/giphy.gif'}} // Replace with the actual path to your GIF
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light, // Set your desired background color
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gif: {
    width: 200,
    height: 200,
  },
});

export default WelcomeScreen;
