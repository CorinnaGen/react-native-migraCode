import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to our Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={styles.button}>
        <Text>Conference</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Story')}
        style={styles.button}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#8F9FBF" }}>
      <Text>Conference screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text>Home</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Story')}
        style={styles.button}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}

function Story() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#BAD9D6" }}>
      <Text>Story screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text>Home</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={styles.button}>
        <Text>Conference</Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conference" component={Conference} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#4D8C63', padding: 10, margin: 10, fontSize: 32 },
});

export default AppNavigation;
