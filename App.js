import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Colors
import colors from './src/styles/colors';

// Components
import CharacterList from './examples/CharacterList';
import Message from './examples/Message';
import WelcomeScreen from './examples/Welcome';
import ScrollingList from './examples/ScrollingList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={backgroundStyle}>
        <Text style={styles.title}>Hello MigraCode!</Text>
      </View>
      <Message>Let's play with React Native!</Message>
      <CharacterList />
      {/* <WelcomeScreen /> */}
      {/* <ScrollingList isHorizontal={true} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    margin: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  content: {
    backgroundColor: 'pink',
  },
});

export default App;
