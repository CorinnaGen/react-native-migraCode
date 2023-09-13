import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const ScrollingList = ({isHorizontal = false}) => {
  return (
    <ScrollView horizontal={isHorizontal}>
      <View style={styles.item}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
      </View>
      {/* Add more items as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default ScrollingList;
