import React, {useState} from 'react';
import {View, Text, Platform, Image, StyleSheet} from 'react-native';

const IOSOrAndroid = () => {
  const [platformText, setPlatformText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (Platform.OS === 'ios') {
    setPlatformText('This is an iOS platform.');
    setImageUrl('https://media.giphy.com/media/l44Qqz6gO6JiVV3pu/giphy.gif');
  } else if (Platform.OS === 'android') {
    setPlatformText('This is an Android platform.');
    setImageUrl('https://media.giphy.com/media/10mzF0YmVmZNuw/giphy.gif');
  } else {
    setPlatformText('This is another platform.');
    setImageUrl('https://media.giphy.com/media/3HxxgzWNNlHeuOPtZN/giphy.gif');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{platformText}</Text>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default IOSOrAndroid;
