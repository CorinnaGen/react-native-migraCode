import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const ScrollViewExample = () => {
  const data = [
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
  ];
  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.item}>
          <Text>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
});

export default ScrollViewExample;
